import './App.css';
import { BrowserRouter as Router, Route, Switch, Link as RouterLink, BrowserRouter, Routes } from 'react-router-dom';
import React, {Suspense, lazy} from 'react';
import { FullPageFallbackProgress } from "./Components/UI/preloaders/FullPageFallbackProgress"
import "../src/common/assets/styles/App.css";
import { observer } from "mobx-react-lite"
import { provider, useInstance } from "react-ioc"
import { AuthLayout } from "./Layouts/AuthLayout"
import CounterPage from "./pages/counter/counter.page"
import { HOME_ROUTE, privateRoutes, publicRoutes } from "./common/router/routes"
import RequireAuth from "./common/router/RequireAuth"
import ProductItemPage from "./pages/productItem/productItem.page"

const App  = provider(

)(observer(() => {


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

  const ProductsPage = lazy(() => lazyRetry( () => import("../src/pages/products/productList.page")))


  return (
    <Router>
      <Suspense fallback={<FullPageFallbackProgress/>}>
        <Routes>
          <Route path={HOME_ROUTE} element={<AuthLayout />}>
            <Route index element={<CounterPage/>} />

            {privateRoutes.map(({path, Component}) =>
              <Route key={path} path={path} element={Component}/>
            )}

            <Route path={"products"} element={<RequireAuth><ProductsPage /></RequireAuth>} />

            <Route path={"products/:id"} element={<RequireAuth><ProductItemPage /></RequireAuth>}/>


          </Route>

          {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={Component}/>
          )}
        </Routes>
      </Suspense>
    </Router>
  );
}));

export default App;
