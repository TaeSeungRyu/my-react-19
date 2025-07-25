import { Link, PrefetchPageLinks } from "react-router";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              Hello world~
            </p>
          </nav>
          <Link
            className="block w-full rounded-3xl border border-gray-200 p-6 dark:border-gray-700"
            to="/pre/child"
          >
            go child
          </Link>
          <Link
            className="block w-full rounded-3xl border border-gray-200 p-6 dark:border-gray-700"
            to="/pre/test"
          >
            go test
          </Link>
          <Link
            className="block w-full rounded-3xl border border-gray-200 p-6 dark:border-gray-700"
            to="/pre/dynamic/asdlfkhasldkfh"
          >
            go dynamic
          </Link>
          <Link
            className="block w-full rounded-3xl border border-gray-200 p-6 dark:border-gray-700"
            to="/action-example"
          >
            go action example
          </Link>
          <Link
            className="block w-full rounded-3xl border border-gray-200 p-6 dark:border-gray-700"
            to="/static"
          >
            go static
          </Link>
          <Link
            className="block w-full rounded-3xl border border-gray-200 p-6 dark:border-gray-700"
            to="/suspense-fallback"
            prefetch="intent"
            preventScrollReset
          >
            go suspense fallback
          </Link>
          {/* 여기한번 해보자 여기한번 해보자 여기한번 해보자 */}
          <Link
            className="block w-full rounded-3xl border border-gray-200 p-6 dark:border-gray-700"
            to="/big-size"
          >
            go big size
          </Link>
          <Link
            className="block w-full rounded-3xl border border-gray-200 p-6 dark:border-gray-700"
            to="/hooks1"
          >
            go hooks1
          </Link>
          <PrefetchPageLinks page="/big-size"></PrefetchPageLinks>
        </div>
        <div className="text-lg text-gray-900 dark:text-gray-100">
          Welcome to React Router!
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          This is a simple welcome page.
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          You can customize it as needed.
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Welcome to React Router!
        </div>
      </div>
    </main>
  );
}
