import { Outlet } from "react-router";
import { Welcome } from "../welcome/welcome";

export default function Head() {
  return (
    <div>
      <div>Head layout</div>
      {/* 아래 구간은 레이아웃에 포함된 라우트 컴포넌트 */}
      <Outlet />
    </div>
  );
}
