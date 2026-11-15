import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: ["/", "/services", "/about", "/contact"],
} satisfies Config;
