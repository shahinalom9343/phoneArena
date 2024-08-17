import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Authproviders/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-16 h-16 mx-auto my-4 md:my-10 lg:my-20 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
