import React, { useState } from 'react';
import Header from '../components/CreateCampaign/Header';
import styled from 'styled-components';
import CreateCampaignCondition from '../components/CreateCampaign/CreateCampaignCondition';
import MessageList from '../components/CreateCampaign/MessageList';
import usePreventEvent from '../utils/usePreventEvent';
import PreventModal from '../components/PreventModal';

const CreateCampaign = () => {
  const [showPreventModal, setShowPreventModal] = useState(false);
  usePreventEvent({ showPreventModal, setShowPreventModal });

  const handlePrevnetModal = () => {
    setShowPreventModal((prev) => !prev);
  };

  return (
    <>
      <Header />
      <GridLayout>
        <CreateCampaignCondition />
        <MessageList />
      </GridLayout>
      <PreventModal isOpen={showPreventModal} handleModal={handlePrevnetModal} />
    </>
  );
};

export default CreateCampaign;

const GridLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;
