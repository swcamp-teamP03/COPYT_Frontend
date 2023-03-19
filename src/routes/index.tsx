import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CopyGroups from '../pages/CopyGroups';
import ClientGroups from '../pages/ClientGroups';
import React from 'react';
import CreateCopy from '../pages/CreateCopy';
import AuthRouter from './AuthRouter';
import ClientGroupDetail from '../components/ClientDetail';
import ClientCreate from '../pages/ClientCreate';
import DetailCopy from '../pages/DetailCopy';
import CreateCampaign from '../pages/CreateCampaign';
import DetailCampaign from '../pages/DetailCampaign';
import CampaignGroups from '../pages/CampaignGroups';
import ServiceHome from '../pages/ServiceHome';
import AuthenticateRoute from './AuthenticateRoute';
import Redirect from '../pages/Redirect';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthenticateRoute isAuthenticated={true} />}>
          <Route path="/main" element={<ServiceHome />} />
          <Route path="/clients" element={<ClientGroups />} />
          <Route path="/clients/:id" element={<ClientGroupDetail />} />
          <Route path="/clients/create" element={<ClientCreate />} />
          <Route path="/copies" element={<CopyGroups />} />
          <Route path="/copies/create" element={<CreateCopy />} />
          <Route path="/copies/:id/*" element={<DetailCopy />} />
          <Route path="/campaign" element={<CampaignGroups />} />
          <Route path="/campaign/create" element={<CreateCampaign />} />
          <Route path="/campaign/:campaignID" element={<DetailCampaign />} />
        </Route>
        <Route element={<AuthenticateRoute isAuthenticated={false} />}>
          <Route path="auth/*" element={<AuthRouter />} />
          <Route path="/redirect/:url" element={<Redirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
