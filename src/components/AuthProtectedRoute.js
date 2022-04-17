import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import NavbarLoggedIn from "./NavbarLoggedIn";

const AuthProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to='/home' />;
  }
  return children;
};

export default AuthProtectedRoute;