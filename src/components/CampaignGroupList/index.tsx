import React from 'react';
import { CHECK } from '../../assets/Check';
import { FAVORITES } from '../../assets/Like';
import useCampaignLikeMutation from '../../quries/Campaign/useCampaignLikeMutation';
import { CampaignsListType } from '../../types/campaign';
import * as S from './CampaginGroupList';

interface CampaginGroupListProps {
  campaignList: CampaignsListType[];
  onClickHandler: (id: number) => void;
}

const CampaginGroupList = ({ campaignList, onClickHandler }: CampaginGroupListProps) => {
  const { mutate: campaginLikeMutate } = useCampaignLikeMutation();

  const hadleLike = (id: number, favorite: boolean) => {
    campaginLikeMutate({ id, favorite });
  };

  console.log(campaignList);

  return (
    <>
      <S.ListContainer>
        {campaignList.map((list) => (
          <S.GroupList key={list.campaignId}>
            <span onClick={() => hadleLike(list.campaignId, list.favorite)}>{list.favorite ? FAVORITES.checked : FAVORITES.unChecked}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.messageType}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.campaignName}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.clickRate}%</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.createdAt}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.sendingDate}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.sendState === '발송완료' ? CHECK.check : CHECK.unCheck}</span>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default CampaginGroupList;
