import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HOME } from '../assets';
import Onboarding from '../components/ServiceHome/Onboarding';
import useCopyGroupsQuery from '../quries/Copy/useCopyGroupsQuery';
import useCampaignsQuery from '../quries/Campaign/useCampaignsQuery';

const ServiceHome = () => {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);
  const navigate = useNavigate();

  const { data: groupList } = useCopyGroupsQuery(0, 3);
  const { data: campaignData } = useCampaignsQuery(0, 1);

  const toggleOnboarding = () => {
    setIsOnboardingOpen(!isOnboardingOpen);
  };

  return (
    <Background>
      <TitleContainer>
        <OnboardingText>
          <h2>🛬 온보딩</h2>
        </OnboardingText>
        <ToggleText onClick={toggleOnboarding}>{isOnboardingOpen ? <>접어두기 {HOME.up}</> : <>펼치기 {HOME.down}</>}</ToggleText>
      </TitleContainer>

      {isOnboardingOpen && <Onboarding />}
      <hr />

      <BoxLayout>
        <span>
          <h2 style={{ textAlign: 'left' }}>최근 카피</h2>
          <>
            {groupList?.totalCopy ? (
              groupList.groupList.map((copy) => (
                <CopyLayout key={copy.copyId}>
                  <span>{copy.copyName} </span>
                  <GoCurrent
                    onClick={() => {
                      navigate(`/copies/${copy.copyId}`);
                    }}
                  >
                    {' '}
                    {HOME.goCurrent}
                  </GoCurrent>
                </CopyLayout>
              ))
            ) : (
              <Box>
                아직 생성한 카피가 없어요
                {HOME.noneCopy}
              </Box>
            )}
          </>
        </span>
        <div>
          <h2 style={{ textAlign: 'left' }}>최근 성과</h2>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '609px', justifyContent: 'space-between' }}>
            {campaignData ? (
              campaignData.campaignList.map((list) => (
                <CampaignLayout key={list.campaignId}>
                  <SendDate style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div>{list.campaignName} </div>
                    <div>{list.sendingDate} </div>
                    <div style={{ alignItems: 'flex-start' }}>{list.clickRate} </div>
                  </SendDate>
                  <GoCurrent onClick={() => navigate(`/campaign/${list.campaignId}`)}>{HOME.goCurrent}</GoCurrent>
                </CampaignLayout>
              ))
            ) : (
              <Box style={{ marginBottom: '20px' }}>
                아직 생성한 성과가 없어요
                {HOME.noneCampaign}
              </Box>
            )}
          </div>
        </div>
      </BoxLayout>
    </Background>
  );
};

export default ServiceHome;

const Background = styled.div`
  min-height: 100vh;
  margin-left: 10%;
  font-weight: 600;
  background-color: #f2f2f2;
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
  justify-content: space-between;
`;

const OnboardingText = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleText = styled.div`
  margin-bottom: 20px;
  text-align: right;
  margin-right: 15%;
  cursor: pointer;
`;

const Box = styled.span`
  width: 480px;
  height: 240px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 12px;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray40};
  padding: 0px 20px;
  margin-right: 120px;
  background-color: white;
`;

const BoxLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  div {
    flex: 1;
  }
`;

const CopyLayout = styled.div`
  min-width: 300px;
  max-width: 604.16px;
  height: 70px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 17px;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 210px;
  justify-content: space-between;
  padding: 0px 15px;
  background-color: white;
`;

const CampaignLayout = styled.div`
  min-width: 130px;
  max-width: 240.36px;
  height: 210.42px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 17px;
  justify-content: space-between;
  padding: 30px 0 10px 15px;
  align-items: flex-start;
  background-color: white;
`;

const GoCurrent = styled.span`
  cursor: pointer;
`;

const SendDate = styled.span`
  gap: 15px;
  margin-left: 10px;
`;
