import React from "react";
import { Navigate } from "react-router-dom";

const UnProtectedRoute = ({ component }) => {
  const token = localStorage.getItem("token");

  return token ? <Navigate to={"/"} /> : component;
};

export default UnProtectedRoute;
