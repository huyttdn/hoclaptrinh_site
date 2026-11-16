import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("lo-trinh", "routes/lo-trinh.tsx"),
  route("gioi-thieu", "routes/gioi-thieu.tsx"),
  route("dang-ky", "routes/dang-ky.tsx"),
  route("admin", "routes/admin.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
