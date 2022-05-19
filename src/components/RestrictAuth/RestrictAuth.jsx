import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export function RestrictAuth() {
  const location = useLocation();
  const { userToken } = useSelector((state) => state.auth);

  return userToken ? (
    <Navigate
      to={`${
        location?.state?.from?.pathname
          ? location?.state?.from?.pathname
          : "/home"
      }`}
      replace
    />
  ) : (
    <Outlet />
  );
}
