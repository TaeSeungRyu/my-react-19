import type { Route } from "./+types/dynamic";
import { useFetcher } from "react-router";

export default function ActionExample({
  loaderData,
}: {
  loaderData: Awaited<ReturnType<typeof loader>>;
}) {
  const fetcher = useFetcher();
  return (
    <div>
      <div>Action Example</div>
      <div>Action Data: {fetcher.data && JSON.stringify(fetcher.data)}</div>
      <div>Loader Data: {JSON.stringify(loaderData)}</div>
      <fetcher.Form method="post" action="/action-example">
        <input
          type="text"
          name="title"
          className="border p-2 bg-gray-100 text-gray-900"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Todo
        </button>
      </fetcher.Form>
    </div>
  );
}

//같은 변수지만 서로 다른 자원으로 공유됨
let sampleIndex = 0;

//1. 클라이언트 전용 데이터 로딩
//페이지 전체에 로딩이 걸리지 않음
export async function clientLoader() {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "dynamic-client-loader",
        params: { dataFromPath: "test" },
      });
    }, 3000);
  });
  return { clientParam: result };
}
clientLoader.hydrate = true as const;

//2. 서버 사이드 로더
//페이지 전체에 로딩이 걸림
export async function loader({ params }: Route.LoaderArgs) {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "action-example", params });
    }, 1000);
  });
  return { params: result };
}

//3. 서버 사이드 액션
export async function action({ request }: Route.ActionArgs) {
  const data = await request.formData();
  console.log("action-example data", data, sampleIndex);
  sampleIndex++;
  return { ok: true, test: "test" };
}

//4. 클라이언트 액션
export async function clientAction({ serverAction }: Route.ClientActionArgs) {
  //서버에서 넘어온 값을 사용
  const data: any = await serverAction();
  console.log("clientAction called", data, sampleIndex);
  sampleIndex++;
  data.list = [1, 2, 3, 4, 5];
  return data;
}

//5.클라이언트 액션의 로딩 상태 (3초간 나옴)
export function HydrateFallback() {
  return <p>로딩중...</p>;
}
