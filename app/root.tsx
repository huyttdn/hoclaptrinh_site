import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { LogoMark } from "./components/logo";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { buttonClass } from "./components/ui";
import { site } from "./data/site";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
  },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#070b14" />
        <meta name="color-scheme" content="dark" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper">
      <LogoMark className="h-12 w-12 animate-pulse" />
      <p className="text-sm font-medium text-slate-500">Đang tải…</p>
    </div>
  );
}

export default function App() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-night focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Chuyển đến nội dung
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Đã xảy ra lỗi";
  let details = "Có lỗi không mong muốn. Vui lòng thử lại.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message =
      error.status === 404 ? "Không tìm thấy trang" : "Đã xảy ra lỗi";
    details =
      error.status === 404
        ? "Trang bạn tìm không tồn tại hoặc đã được di chuyển."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-6 py-20">
      <div className="w-full max-w-xl text-center">
        <LogoMark className="mx-auto h-12 w-12" />
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
          {site.name}
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {message}
        </h1>
        <p className="mt-4 text-pretty leading-7 text-slate-600">{details}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className={buttonClass("primary", "md")}>
            Về trang chủ
          </Link>
          <Link to="/#dang-ky" className={buttonClass("secondary", "md")}>
            Đăng ký học
          </Link>
        </div>
        {stack ? (
          <pre className="mt-10 w-full overflow-x-auto rounded-2xl bg-night p-4 text-left text-xs text-slate-400">
            <code>{stack}</code>
          </pre>
        ) : null}
      </div>
    </main>
  );
}
