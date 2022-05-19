import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export function RequireAuth() {
  const location = useLocation();
  const { userToken } = useSelector((state) => state.auth);

  return userToken ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
}
