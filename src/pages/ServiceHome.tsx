import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Onboarding from '../components/ServiceHome/Onboarding';

const ServiceHome = () => {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);

  const toggleOnboarding = () => {
    setIsOnboardingOpen(!isOnboardingOpen);
  };

  return (
    <Background>
      <TitleContainer>
        <h2>온보딩</h2>
      </TitleContainer>
      <ToggleText onClick={toggleOnboarding}>{isOnboardingOpen ? '접어두기' : '펼치기'}</ToggleText>
      {isOnboardingOpen && <Onboarding />}
    </Background>
  );
};

export default ServiceHome;

const Background = styled.div`
  min-height: 100vh;
  margin-left: 10%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
  margin-bottom: 20px;
`;

const ToggleText = styled.div`
  margin-bottom: 20px;
  text-align: right;
  margin-right: 15%;
  cursor: pointer;
`;
