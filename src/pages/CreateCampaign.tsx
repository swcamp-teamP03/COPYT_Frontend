import React from 'react';
import Header from '../components/CreateCampaign/Header';
import styled from 'styled-components';
import CreateCampaignCondition from '../components/CreateCampaign/CreateCampaignCondition';

const CreateCampaign = () => {
  return (
    <>
      <Header />
      <GridLayout>
        <CreateCampaignCondition />
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
