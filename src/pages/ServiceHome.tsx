import React, { useState } from 'react';
import styled from 'styled-components';
import { HOME } from '../assets';
import Onboarding from '../components/ServiceHome/Onboarding';
import Recent from '../components/ServiceHome/Recent';

const ServiceHome = () => {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);

  const toggleOnboarding = () => {
    setIsOnboardingOpen(!isOnboardingOpen);
  };

  return (
    <Layout>
      <TitleContainer>
        <OnboardingText>
          <h2>카피티 이용 가이드</h2>
        </OnboardingText>
        <ToggleText onClick={toggleOnboarding}>{isOnboardingOpen ? <>접어두기 {HOME.up}</> : <>펼치기 {HOME.down}</>}</ToggleText>
      </TitleContainer>
      {isOnboardingOpen && <Onboarding />}
      <Hr />
      <Recent />
    </Layout>
  );
};

export default ServiceHome;

const Hr = styled.hr`
  opacity: 0.2;
`;

const Layout = styled.div`
  padding: 0 10%;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const OnboardingText = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleText = styled.div`
  margin-bottom: 20px;
  text-align: right;
  cursor: pointer;
`;
