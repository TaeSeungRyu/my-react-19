import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layout/head.tsx", [
    layout("layout/mother.tsx", [
      layout("layout/child.tsx", [route("child", "routes/child.tsx")]),
      route("test", "routes/test.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
