import { Outlet } from "react-router";
import { Welcome } from "../welcome/welcome";

export default function Mother() {
  return (
    <div>
      <div>Mother layout</div>
      {/* 아래 구간은 레이아웃에 포함된 라우트 컴포넌트 */}
      <Outlet />
    </div>
  );
}
