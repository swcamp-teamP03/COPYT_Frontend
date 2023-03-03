import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="singup" element={<SignUp />} />
    </Routes>
  );
};

export default AuthRouter;
