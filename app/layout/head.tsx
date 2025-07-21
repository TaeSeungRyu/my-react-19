import { Outlet } from "react-router";
import type { Route } from "./+types/head";

//서버사이드 흉내내 보기
export async function loader({ params }: Route.LoaderArgs) {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "head-layout", params });
    }, 1000);
  });
  return { params: result };
}

export default function Head() {
  return (
    <div>
      <div>Head layout</div>
      {/* 아래 구간은 레이아웃에 포함된 라우트 컴포넌트 */}
      <Outlet />
    </div>
  );
}
