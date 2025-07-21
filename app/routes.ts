import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("pre", [
    //prifix는 앞에 추가 경로를 지정하는데 사용됩니다.
    layout("layout/head.tsx", [
      // 레이아웃을 지정합니다.
      layout("layout/mother.tsx", [
        layout("layout/child.tsx", [route("child", "routes/child.tsx")]),
        route("test", "routes/test.tsx"),
      ]),
      route("dynamic/:dataFromPath", "routes/dynamic.tsx"),
    ]),
  ]),
  route("action-example", "routes/action-example.tsx"),
] satisfies RouteConfig;
