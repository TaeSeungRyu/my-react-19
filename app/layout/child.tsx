import { Outlet } from "react-router";

export default function Child() {
  return (
    <div>
      <div>Child layout</div>
      <Outlet />
    </div>
  );
}
