import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpSuccess from '../pages/SignUpSuccess';

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signup/success" element={<SignUpSuccess />} />
    </Routes>
  );
};

export default AuthRouter;
