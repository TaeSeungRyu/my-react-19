import type { Route } from "./+types/dynamic";

export async function loader({ params }: Route.LoaderArgs) {
  return { name: "my-name", params };
}

// 클라이언트 전용 데이터 로딩
export async function clientLoader() {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "dynamic-client-loader",
        params: { dataFromPath: "test" },
      });
    }, 1000);
  });
  return { clientParam: result };
}
clientLoader.hydrate = true as const;

export default function Dynamic({
  loaderData,
}: {
  loaderData: Awaited<ReturnType<typeof loader>>;
}) {
  return (
    <div>
      <div>test page</div>
      <div>Loader Data: {JSON.stringify(loaderData)}</div>
    </div>
  );
}
