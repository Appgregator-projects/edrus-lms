import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({
  user,
  redirectPath,
  children,
}) => {
  const { pathname } = useLocation();

  // if (employer) {
  //   return user && user.role == "employer" ? (
  //     children
  //   ) : (
  //     <Navigate to={redirectPath} replace />
  //   );
  // } else {
  //   return user || userGoogle ? (
  //     children
  //   ) : (
  //     <Navigate to={redirectPath} replace />
  //   );
  // }

  if (user !== null || user === true) return children 
  if (user === null || user === false) return <Navigate to={redirectPath} replace />
};

export default ProtectedRoute;
