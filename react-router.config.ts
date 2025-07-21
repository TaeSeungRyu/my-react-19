import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async prerender() {
    //정적 페이지를 사전 렌더링합니다.
    return ["/static"];
  },
} satisfies Config;
