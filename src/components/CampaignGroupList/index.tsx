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
            <div onClick={() => hadleLike(list.campaignId, list.favorite)}>{list.favorite ? FAVORITES.checked : FAVORITES.unChecked}</div>
            <div onClick={() => onClickHandler(list.campaignId)}>{list.messageType}</div>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.campaignName}</span>
            <div onClick={() => onClickHandler(list.campaignId)}>{list.clickRate}%</div>
            <div onClick={() => onClickHandler(list.campaignId)}>{list.createdAt}</div>
            <div onClick={() => onClickHandler(list.campaignId)}>{list.sendingDate}</div>
            <div onClick={() => onClickHandler(list.campaignId)}>{list.sendState === '발송완료' ? CHECK.check : CHECK.unCheck}</div>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default CampaginGroupList;
