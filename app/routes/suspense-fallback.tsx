import React from "react";
import { Await, useLoaderData } from "react-router";

export async function loader() {
  const firstWithAwait = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "firstWithAwait Title",
        description: "firstWithAwait Description",
      });
    }, 1500);
  });

  const secondWithoutAwait = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "secondWithoutAwait title",
        description: "secondWithoutAwait description",
      });
    }, 4000);
  });

  return { firstWithAwait, secondWithoutAwait };
}

function ReviewsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
    </div>
  );
}

export default function SuspenseFallback() {
  const { firstWithAwait, secondWithoutAwait } = useLoaderData();
  return (
    <div>
      <div>suspense fallback</div>
      <h1>firstWithAwait 에 의해서 페이지 전체가 로딩이 걸립니다.</h1>
      <h1>{firstWithAwait.title}</h1>
      <p>{firstWithAwait.description}</p>
      <React.Suspense fallback={<ReviewsSkeleton />}>
        <Await
          resolve={secondWithoutAwait}
          errorElement={<div>Could not load reviews 😬</div>}
          children={(resolvedReviews) => (
            <div>
              <h2>
                Await 컴포넌트와 secondWithoutAwait은 await가 되어 있지 않아
                ReviewsSkeleton이 먼저 로딩됩니다.
              </h2>
              <p>{resolvedReviews.description}</p>
              <p>{resolvedReviews.title}</p>
            </div>
          )}
        />
      </React.Suspense>
      {[...Array(30)].map((_, index) => (
        <div key={index} className="h-4 rounded w-full mb-2">
          test test
        </div>
      ))}
    </div>
  );
}
