import React from 'react';
import CampaignInfo from '../components/DetailCampaign/CampaignInfo';
import Header from '../components/DetailCampaign/Header';
import styled from 'styled-components';
import CustomerGroupInfo from '../components/DetailCampaign/CustomerGroupInfo';
import SendMessage from '../components/DetailCampaign/SendMessage';
import WithCollapse from '../components/common/WithCollapse';
import Analysis from '../components/DetailCampaign/Analysis';
import Comment from '../components/DetailCampaign/Comment';

const DetailCampaign = () => {
  return (
    <>
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
        <WithCollapse title="코멘트">
          <Comment />
        </WithCollapse>
      </Layout>
    </>
  );
};

export default DetailCampaign;

const Layout = styled.div`
  max-width: 70%;
  margin: 0 auto;
`;
