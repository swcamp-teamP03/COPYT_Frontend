import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAccessToken } from '../api';

const AuthenticateRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const token = getAccessToken();

  if (isAuthenticated) {
    return token ? <Outlet /> : <Navigate to="/auth" />;
  } else {
    return token ? <Navigate to="/" /> : <Outlet />;
  }
};

export default AuthenticateRoute;
