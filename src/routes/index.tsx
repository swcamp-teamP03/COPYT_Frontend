import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CopyGroups from '../pages/CopyGroups';
import ClientGroups from '../pages/ClientGroups';
import React from 'react';
import Layout from '../components/Layout';
import CreateCopy from '../pages/CreateCopy';
import AuthRouter from './AuthRouter';
import ClientGroupDetail from '../components/ClientDetail';
import ClientGroupCreate from '../components/ClientCreate';
import DetailCopy from '../pages/DetailCopy';
import CreateCampaign from '../pages/CreateCampaign';
import DetailCampaign from '../pages/DetailCampaign';
import CampaignGroups from '../pages/CampaignGroups';
import ServiceHome from '../pages/ServiceHome';
import AuthenticateRoute from './AuthenticateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthenticateRoute isAuthenticated={true} />}>
          <Route path="/" element={<Layout router={<ServiceHome />} />} />
          <Route path="/clients" element={<Layout router={<ClientGroups />} />} />
          <Route path="/clients/:id" element={<Layout router={<ClientGroupDetail />} />} />
          <Route path="/clients/create" element={<Layout router={<ClientGroupCreate />} />} />
          <Route path="/copies" element={<Layout router={<CopyGroups />} />} />
          <Route path="/copies/create" element={<CreateCopy />} />
          <Route path="/copies/:id/*" element={<DetailCopy />} />
          <Route path="/campaign" element={<Layout router={<CampaignGroups />} />} />
          <Route path="/campaign/create" element={<CreateCampaign />} />
          <Route path="/campaign/:campaignID" element={<DetailCampaign />} />
        </Route>
        <Route element={<AuthenticateRoute isAuthenticated={false} />}>
          <Route path="auth/*" element={<AuthRouter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
