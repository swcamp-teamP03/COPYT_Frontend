import React from 'react';
import Header from '../components/CreateCampaign/Header';
import styled from 'styled-components';
import CreateCampaignCondition from '../components/CreateCampaign/CreateCampaignCondition';
import MessageList from '../components/CreateCampaign/MessageList';

const CreateCampaign = () => {
  return (
    <>
      <Header />
      <GridLayout>
        <CreateCampaignCondition />
        <MessageList />
      </GridLayout>
    </>
  );
};

export default CreateCampaign;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;
