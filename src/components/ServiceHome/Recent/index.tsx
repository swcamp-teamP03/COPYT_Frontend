import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../assets';
import useCampaignsQuery from '../../../quries/Campaign/useCampaignsQuery';
import useCopyGroupsQuery from '../../../quries/Copy/useCopyGroupsQuery';
import * as S from './Recent.styles';

const Recent = () => {
  const navigate = useNavigate();

  const { data: groupList } = useCopyGroupsQuery(0, 3);
  const { data: campaignData } = useCampaignsQuery(0, 1);

  const onClickCopy = (id: number) => {
    navigate(`/copies/${id}`);
  };
  const onClickCampaign = (id: number) => {
    navigate(`/campaign/${id}`);
  };

  return (
    <S.GridLayout>
      <div>
        <h2 style={{ textAlign: 'left' }}>최근 카피</h2>
        {groupList?.totalCopy ? (
          <S.CopyLayout>
            {groupList.groupList.map((copy) => (
              <S.CopyItems key={copy.copyId}>
                <span>{copy.copyName} </span>
                <S.GoCurrent onClick={() => onClickCopy(copy.copyId)}>{HOME.goCurrent}</S.GoCurrent>
              </S.CopyItems>
            ))}
          </S.CopyLayout>
        ) : (
          <S.Box>
            아직 생성한 카피가 없어요
            {HOME.noneCopy}
          </S.Box>
        )}
      </div>
      <div>
        <h2 style={{ textAlign: 'left' }}>최근 성과</h2>
        {campaignData?.campaignList && campaignData?.campaignList.length > 0 ? (
          <S.CampaignLayout>
            {campaignData.campaignList.map((list) => (
              <S.CampaignItems key={list.campaignId}>
                <S.CampaignBody>
                  <h3>{list.campaignName}</h3>
                  <S.SendDate>{list.sendingDate}</S.SendDate>
                  <S.ClickRate>
                    <span>클릭률</span>
                    <span>{list.clickRate}%</span>
                  </S.ClickRate>
                </S.CampaignBody>
                <S.CampaignFooter>
                  <S.GoCurrent onClick={() => onClickCampaign(list.campaignId)}>{HOME.goCurrent}</S.GoCurrent>
                </S.CampaignFooter>
              </S.CampaignItems>
            ))}
          </S.CampaignLayout>
        ) : (
          <S.Box>
            아직 생성한 성과가 없어요
            {HOME.noneCampaign}
          </S.Box>
        )}
      </div>
    </S.GridLayout>
  );
};

export default Recent;
