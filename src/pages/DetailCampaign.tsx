import React, { Suspense } from 'react';
import CampaignInfo from '../components/DetailCampaign/CampaignInfo';
import Header from '../components/DetailCampaign/Header';
import styled from 'styled-components';
import useDetailCampaignQuery from '../quries/Campaign/useDetailCampaignQuery';
import { useParams } from 'react-router-dom';
import CustomerGroupInfo from '../components/DetailCampaign/CustomerGroupInfo';

const DetailCampaign = () => {
  const { campaignID } = useParams();
  const { data: detailCampaign } = useDetailCampaignQuery(campaignID);

  if (!detailCampaign) {
    return null;
  }

  return (
    <Suspense fallback={<div>...isLoading</div>}>
      <Header />
      <Layout>
        <CampaignInfo />
        <CustomerGroupInfo />
      </Layout>
    </Suspense>
  );
};

export default DetailCampaign;

const Layout = styled.div`
  max-width: 70%;
  margin: 0 auto;
`;
