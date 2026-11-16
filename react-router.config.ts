import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: ["/", "/lo-trinh", "/gioi-thieu", "/dang-ky"],
} satisfies Config;
