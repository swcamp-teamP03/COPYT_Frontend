import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CopyGroups from '../pages/CopyGroups';
import CreateCopy from '../pages/CreateCopy';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/copy" element={<CopyGroups />} />
        <Route path="/copy/create" element={<CreateCopy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
