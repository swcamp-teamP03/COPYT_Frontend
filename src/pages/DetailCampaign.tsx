import React from 'react';
import CampaignInfo from '../components/DetailCampaign/CampaignInfo';
import Header from '../components/DetailCampaign/Header';
import styled from 'styled-components';
import CustomerGroupInfo from '../components/DetailCampaign/CustomerGroupInfo';
import SendMessage from '../components/DetailCampaign/SendMessage';
import Analysis from '../components/DetailCampaign/Analysis';
import Comment from '../components/DetailCampaign/Comment';

const DetailCampaign = () => {
  return (
    <Layout>
      <Header />
      <CampaignInfo />
      <CustomerGroupInfo />
      <SendMessage />
      <Analysis />
      <Comment />
    </Layout>
  );
};

export default DetailCampaign;

const Layout = styled.div`
  padding: 0 4rem;
`;
