// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CopyGroups from '../pages/CopyGroups';
import ClientGroups from '../pages/ClientGroups';
import React from 'react';
import GNB from '../components/common/GNB';
import AuthRouter from './AuthRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <GNB />
      <Routes>
        <Route path="/copies" element={<CopyGroups />} />
        <Route path="/clients" element={<ClientGroups />} />
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
