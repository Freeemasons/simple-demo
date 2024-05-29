import React, {lazy} from "react";
import AuthPage from "../../pages/auth/auth.page";
import RequireAuth from "./RequireAuth";


const lazyRetry = (componentImport) =>
  new Promise((resolve, reject) => {
    const storageKey = `retry-lazy-refreshed${btoa(componentImport.toString())}`;
    const hasRefreshed = JSON.parse(window.sessionStorage.getItem(storageKey) || 'false');
    componentImport()
      .then((component) => {
        window.sessionStorage.setItem(storageKey, 'false');
        if (component === undefined) {
          window.sessionStorage.setItem(storageKey, 'true');
          return window.location.reload(); // refresh the page
        }
        resolve(component);
      })
      .catch((error) => {
        if (!hasRefreshed) {
          // not been refreshed yet
          window.sessionStorage.setItem(storageKey, 'true');
          window.location.reload();
        }
        reject(error); // Default error behaviour as already tried refresh
      });
  });



const CounterPage = lazy(() => lazyRetry( () => import("../../pages/counter/counter.page.jsx")))
const TodosPage = lazy(() => lazyRetry( () => import("../../pages/Todos/Todos.page.jsx")))

export const HOME_ROUTE = '/'
export const AUTH_ROUTE = '/auth'
export const TODOS_ROUTE = '/todos'


export const indexElement = <CounterPage />

export const privateRoutes = [
  { path: TODOS_ROUTE, Component: <TodosPage /> },
]

export const publicRoutes = [
  { path: AUTH_ROUTE, Component: <AuthPage/> },
]