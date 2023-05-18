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

  if (user ) return children 
  if (!user) return <Navigate to={redirectPath} replace />
};

export default ProtectedRoute;
