import React from 'react';
import { FAVORITES } from '../../assets/Like';
import { CampaignsListType } from '../../types/campaign';
import * as S from './CampaginGroupList';

interface CampaginGroupListProps {
  campaignList: CampaignsListType[];
  onClickHandler: (id: number) => void;
}

const CampaginGroupList = ({ campaignList, onClickHandler }: CampaginGroupListProps) => {
  const hadleClick = () => {
    console.log('click');
  };

  return (
    <>
      <S.ListContainer>
        {campaignList.map((list) => (
          <S.GroupList key={list.campaignId}>
            <span onClick={hadleClick}>{list.favorite ? FAVORITES.checked : FAVORITES.unChecked}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.messageType}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.campaignName}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.clickRate}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.createdAt}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.sendingDate}</span>
            <span onClick={() => onClickHandler(list.campaignId)}>{list.sendState}</span>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default CampaginGroupList;
