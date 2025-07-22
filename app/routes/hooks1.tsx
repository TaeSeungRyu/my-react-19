import { Suspense } from "react";
import {
  Await,
  Form,
  useActionData,
  useAsyncValue,
  useLoaderData,
} from "react-router";

export async function action({ request }: { request: Request }) {
  const body = await request.formData();
  const name = body.get("inputName");
  return { message: `Hello, ${name}` };
}

export function loader() {
  const message = new Promise((resolve) => {
    setTimeout(() => {
      resolve("부모가 자식에게 데이터를 전달합니다.");
    }, 1000);
  });

  return {
    message,
  };
}

function ChildComponent() {
  const data = useAsyncValue(); //loader가 반드시 호출되어야 합니다.
  //useAsyncValue는 Suspense에서만 사용할 수 있습니다.
  //그렇지 않으면 페이지 전체가 멈춥니다(f5를 누르면 해결 가능하나 페이지 이동에서는 block)
  return <p>Data: {`${data}`}</p>;
}

export default function Hook1() {
  const data = useActionData();
  const loaderData = useLoaderData() as { message: Promise<string> };
  return (
    <Form method="post">
      <input
        type="text"
        name="inputName"
        className="border border-gray-300 p-2 rounded"
      />
      {data ? data.message : "Waiting..."}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
        Submit
      </button>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={loaderData.message}>
          <ChildComponent />
        </Await>
      </Suspense>
    </Form>
  );
}
