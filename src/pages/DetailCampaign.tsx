import React, { Suspense } from 'react';
import CampaignInfo from '../components/DetailCampaign/CampaignInfo';
import Header from '../components/DetailCampaign/Header';
import styled from 'styled-components';
import useDetailCampaignQuery from '../quries/Campaign/useDetailCampaignQuery';
import { useParams } from 'react-router-dom';
import CustomerGroupInfo from '../components/DetailCampaign/CustomerGroupInfo';
import SendMessage from '../components/DetailCampaign/SendMessage';
import WithCollapse from '../components/common/WithCollapse';
import Analysis from '../components/DetailCampaign/Analysis';

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
        <WithCollapse title="캠페인 정보">
          <CampaignInfo />
        </WithCollapse>
        <WithCollapse title="고객 그룹 정보">
          <CustomerGroupInfo />
        </WithCollapse>
        <WithCollapse title="보낸 메시지">
          <SendMessage />
        </WithCollapse>
        <Analysis />
      </Layout>
    </Suspense>
  );
};

export default DetailCampaign;

const Layout = styled.div`
  max-width: 70%;
  margin: 0 auto;
`;
