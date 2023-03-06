import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CopyGroups from '../pages/CopyGroups';
import ClientGroups from '../pages/ClientGroups';
import React from 'react';
import Layout from '../components/Layout';
import CreateCopy from '../pages/CreateCopy';
import AuthRouter from './AuthRouter';
import ClientGroupDetail from '../components/ClientDetail';
import ClientGroupCreate from '../components/ClientCreate';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/copies" element={<Layout router={<CopyGroups />} />} />
        <Route path="/clients" element={<Layout router={<ClientGroups />} />} />
        <Route path="/clients/detail" element={<Layout router={<ClientGroupDetail />} />} />
        <Route path="/clients/create" element={<Layout router={<ClientGroupCreate />} />} />
        <Route path="/copies/create" element={<CreateCopy />} />
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
