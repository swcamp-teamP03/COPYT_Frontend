import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HOME } from '../assets';
import Onboarding from '../components/ServiceHome/Onboarding';

const ServiceHome = () => {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);

  const toggleOnboarding = () => {
    setIsOnboardingOpen(!isOnboardingOpen);
  };

  return (
    <Background>
      <TitleContainer>
        <Image src="../../public/airport.jpeg" />
        <h2>온보딩</h2>
      </TitleContainer>
      <ToggleText onClick={toggleOnboarding}>{isOnboardingOpen ? '접어두기' : '펼치기'}</ToggleText>
      {isOnboardingOpen && <Onboarding />}
      <hr />

      <BoxLayout>
        <div>
          <h2 style={{ textAlign: 'left' }}>최근 카피</h2>
          <Box style={{ marginBottom: '20px' }}>
            아직 생성한 카피가 없어요
            {HOME.noneCopy}
          </Box>
        </div>
        <div>
          <h2 style={{ textAlign: 'left' }}>최근 성과</h2>
          <Box style={{ marginBottom: '20px' }}>
            아직 생성한 성과가 없어요
            {HOME.noneCampaign}
          </Box>
        </div>
      </BoxLayout>
    </Background>
  );
};

export default ServiceHome;

const Background = styled.div`
  min-height: 100vh;
  margin-left: 10%;
  hr {
    margin-top: 40px;
    border-color: 1px solid ${({ theme }) => theme.colors.gray40};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 20px;
`;

const ToggleText = styled.div`
  margin-bottom: 20px;
  text-align: right;
  margin-right: 15%;
  cursor: pointer;
`;
const Image = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 10px;
`;
const Box = styled.div`
  width: 480px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 12px;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray40};
  font-weight: 600;
  padding: 20px;
`;

const BoxLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  div {
    flex: 1;
  }
`;
