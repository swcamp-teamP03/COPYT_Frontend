import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CopyGroups from '../pages/CopyGroups';
import ClientGroups from '../pages/ClientGroups';
import React from 'react';
import Layout from '../components/Layout';
import CreateCopy from '../pages/CreateCopy';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/copies" element={<Layout router={<CopyGroups />} />} />
        <Route path="/clients" element={<Layout router={<ClientGroups />} />} />
        <Route path="/copies/create" element={<CreateCopy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
