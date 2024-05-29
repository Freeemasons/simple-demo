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
const TodosPage = lazy(() => lazyRetry( () => import("../../pages/Weather/weather.page.jsx")))

export const HOME_ROUTE = '/'
export const AUTH_ROUTE = '/auth'
export const WEATHER_ROUTE = '/weather'
// export const USER_PROFILE = '/user-profile'
// export const EDIT_USER_PROFILE = '/edit-user-profile'


export const indexElement = <CounterPage />

export const privateRoutes = [
  { path: WEATHER_ROUTE, Component: <RequireAuth><TodosPage /></RequireAuth> },
]

export const publicRoutes = [
  { path: AUTH_ROUTE, Component: <AuthPage/> },
]