/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";

function PrivateRoute({ element: Element, ...rest }) {
  const { accessToken, deliveryAgent } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <Route
      {...rest}
      element={
        accessToken ? (
          deliveryAgent ? (
            <Element type="deliveryAgent" />
          ) : (
            <Element type="department" />
          )
        ) : (
          <Navigate to="/login" replace state={{ from: location }}/>
        )
      }
    />
  );
}

export default PrivateRoute;
