import './App.css';
import { BrowserRouter as Router, Route, Switch, Link as RouterLink, BrowserRouter, Routes } from 'react-router-dom';
import React, {Suspense} from 'react';
import { FullPageFallbackProgress } from "./Components/UI/preloaders/FullPageFallbackProgress"
import "../src/common/assets/styles/App.css";
import { observer } from "mobx-react-lite"
import { provider, useInstance } from "react-ioc"
import { AuthLayout } from "./Layouts/AuthLayout"
import CounterPage from "./pages/counter/counter.page"
import { HOME_ROUTE, privateRoutes, publicRoutes } from "./common/router/routes"

const App  = provider(

)(observer(() => {


  return (
    <Router>
      <Suspense fallback={<FullPageFallbackProgress/>}>
        <Routes>
          <Route path={HOME_ROUTE} element={<AuthLayout />}>
            <Route index element={<CounterPage/>} />

            {privateRoutes.map(({path, Component}) =>
              <Route key={path} path={path} element={Component}/>
            )}
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
