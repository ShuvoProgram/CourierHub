/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";

function PrivateRoute({children}) {
  const { accessToken, deliveryAgent } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!accessToken) {
   return <Navigate to="/" replace state={{ from: location }}/>
  }

  return children;
}

export default PrivateRoute;
