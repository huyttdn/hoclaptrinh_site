import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const root = path.resolve(process.env.SERVE_DIR ?? "build/client");
const port = Number(process.env.PORT ?? 4173);
const host = process.env.HOST ?? "0.0.0.0";

const fallbackFiles = ["__spa-fallback.html", "index.html"];

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

function safePath(requestPath) {
  const filePath = path.join(root, requestPath);
  const relative = path.relative(root, filePath);

  if (relative.startsWith("..") || path.isAbsolute(relative)) return null;
  return filePath;
}

async function findStaticFile(pathname) {
  const candidates = pathname.endsWith("/")
    ? [path.join(pathname, "index.html")]
    : [pathname, `${pathname}.html`, path.join(pathname, "index.html")];

  for (const candidate of candidates) {
    const filePath = safePath(candidate);
    if (filePath && (await isFile(filePath))) return filePath;
  }

  return null;
}

async function findFallback() {
  for (const file of fallbackFiles) {
    const filePath = path.join(root, file);
    if (await isFile(filePath)) return filePath;
  }

  return null;
}

function sendText(response, status, message) {
  response.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(message);
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    sendText(response, 405, "Method not allowed");
    return;
  }

  let pathname;

  try {
    const url = new URL(
      request.url ?? "/",
      `http://${request.headers.host ?? "localhost"}`,
    );
    pathname = decodeURIComponent(url.pathname);
  } catch {
    sendText(response, 400, "Bad request");
    return;
  }

  if (pathname.includes("\0")) {
    sendText(response, 400, "Bad request");
    return;
  }

  let filePath = await findStaticFile(pathname);

  if (!filePath) {
    const hasExtension = path.extname(pathname) !== "";

    if (hasExtension) {
      sendText(response, 404, "Not found");
      return;
    }

    filePath = await findFallback();
  }

  if (!filePath) {
    sendText(response, 404, "Not found");
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  const headers = {
    "Content-Type": contentTypes[extension] ?? "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  };

  if (filePath.includes(`${path.sep}assets${path.sep}`)) {
    headers["Cache-Control"] = "public, max-age=31536000, immutable";
  } else if (extension === ".html") {
    headers["Cache-Control"] = "no-cache";
  }

  response.writeHead(200, headers);

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  const stream = createReadStream(filePath);
  stream.on("error", () => response.destroy());
  stream.pipe(response);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use. Set PORT to use another port.`);
  } else {
    console.error(error);
  }
  process.exitCode = 1;
});

server.listen(port, host, () => {
  console.log(`Serving static build from ${root}`);
  console.log(`Preview available at http://localhost:${port}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
