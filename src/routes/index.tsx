import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CopyGroups from '../pages/CopyGroups';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/copies" element={<CopyGroups />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
