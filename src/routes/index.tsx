// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CopyGroups from '../pages/CopyGroups';
import ClientGroups from '../pages/ClientGroups';
import * as React from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/copies" element={<CopyGroups />} />
        <Route path="/clients" element={<ClientGroups />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
