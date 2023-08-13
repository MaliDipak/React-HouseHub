import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import useAuthState from "../hooks/useAuthState";

import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { logedIn, checkState } = useAuthState();

  if (checkState) {
    return <Spinner />;
  }

  return logedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
