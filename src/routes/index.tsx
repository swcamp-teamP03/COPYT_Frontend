// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CopyGroups from '../pages/CopyGroups';
import ClientGroups from '../pages/ClientGroups';
import React from 'react';
import GNB from '../components/common/GNB';
import CreateCopy from '../pages/CreateCopy';
import GNBRoute from './GNBRoutes';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GNBRoute hasGNB={true} />}>
          <Route path="/copies" element={<CopyGroups />} />
          <Route path="/copies/create" element={<CreateCopy />} />
          <Route path="/clients" element={<ClientGroups />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
