import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({
  user,
  userGoogle,
  redirectPath,
  employer,
  children,
}) => {
  const { pathname } = useLocation();

  if (employer) {
    return user && user.role == "employer" ? (
      children
    ) : (
      <Navigate to={redirectPath} replace />
    );
  } else {
    return user || userGoogle ? (
      children
    ) : (
      <Navigate to={redirectPath} replace />
    );
  }
};

export default ProtectedRoutes;
