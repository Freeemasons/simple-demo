import React, {useEffect} from 'react';
import {useLocation, Navigate, useParams} from 'react-router-dom';
import {AUTH_ROUTE, DOUBLE_PAGE} from "./routes";
import {observer} from "mobx-react-lite";
import authStore from "../../stores/auth.store"

const RequireAuth = observer(({children}) => {
  const location = useLocation();

  console.log("authStore.isAuth")

  if (!authStore.isAuth) {
    return <Navigate to={AUTH_ROUTE} state={{from: location}}/>
  }

  return children
});

export default RequireAuth;