/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";
import PreLoading from "../components/Loading/PreLoading";

function PrivateRoute({ children }) {
  const { accessToken, deliveryAgent } = useSelector((state) => state.auth);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous check for access token or other data
    // For example, fetching user authentication status
    const fetchAuthenticationStatus = async () => {
      // Simulate an asynchronous operation (e.g., API call) to check authentication status
      // Replace this with actual logic to verify authentication status
      // Here, we'll use a setTimeout to simulate an async check
      setTimeout(() => {
        // Set loading to false after simulation (e.g., after checking authentication status)
        setIsLoading(false);
      }, 1500); // Simulating a delay of 1.5 seconds
    };

    fetchAuthenticationStatus();
  }, []); // Run only once when the component mounts

  if (isLoading) {
    // Render a loading spinner or component while checking authentication status
    return <PreLoading/>;
  }

  if (!accessToken) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;
