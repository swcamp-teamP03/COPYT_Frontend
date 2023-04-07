import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { HOME } from '../assets';
import Onboarding from '../components/ServiceHome/Onboarding';
import WithCollapse from '../components/common/WithCollapse';
import { CHEVRON } from '../assets/Chevron';
import useCopyGroupsQuery from '../quries/Copy/useCopyGroupsQuery';
import useCampaignsQuery from '../quries/Campaign/useCampaignsQuery';

const ServiceHome = () => {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);
  const navigate = useNavigate();

  const { data: groupList } = useCopyGroupsQuery(0, 3);
  const { data: campaignData } = useCampaignsQuery(0, 2);

  const toggleOnboarding = () => {
    setIsOnboardingOpen(!isOnboardingOpen);
  };

  return (
    <Background>
      <TitleContainer>
        <OnboardingText>
          <Image src="../../public/airport.jpeg" />
          <h2>온보딩</h2>
        </OnboardingText>
        <ToggleText onClick={toggleOnboarding}>{isOnboardingOpen ? <>접어두기 {HOME.up}</> : <>펼치기 {HOME.down}</>}</ToggleText>
      </TitleContainer>

      {isOnboardingOpen && <Onboarding />}
      <hr />

      <BoxLayout>
        <div>
          <h2 style={{ textAlign: 'left' }}>최근 카피</h2>
          <>
            {groupList ? (
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
        </div>

        <div>
          <h2 style={{ textAlign: 'left' }}>최근 성과</h2>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            {campaignData ? (
              campaignData.campaignList.map((list) => (
                <CampaignLayout key={list.campaignId}>
                  <SendDate style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>{list.campaignName} </div>
                    <div>{list.sendingDate} </div>
                    <div>{list.clickRate} </div>
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

const CopyLayout = styled.div`
  min-width: 250px;
  max-width: 480px;
  height: 70px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 17px;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
`;

const CampaignLayout = styled.div`
  min-width: 130px;
  max-width: 200px;
  height: 230px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray40};
  border-radius: 17px;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
  padding: 30px 50px 0 0;
  margin-right: 10px;
`;

const GoCurrent = styled.span`
  cursor: pointer;
`;

const SendDate = styled.span`
  gap: 15px;
  margin-left: 10px;
`;
