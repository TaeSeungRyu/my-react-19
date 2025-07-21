import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "change title" },
    { name: "description", content: "desc..." },
  ];
}

export default function Test() {
  return (
    <div>
      <div>test page</div>
    </div>
  );
}
