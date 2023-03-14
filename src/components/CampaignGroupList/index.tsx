import React from 'react';
import { FAVORITES } from '../../assets/Like';
import { CampaignsListType } from '../../types/campaign';
import * as S from './CampaginGroupList';

interface CampaginGroupListProps {
  campaignList: CampaignsListType[];
  onClickHandler: (id: number) => void;
}

const CampaginGroupList = ({ campaignList, onClickHandler }: CampaginGroupListProps) => {
  return (
    <>
      <S.ListContainer>
        {campaignList.map((list) => (
          <S.GroupList key={list.campaignId} onClick={() => onClickHandler(list.campaignId)}>
            <span>{list.favorite ? FAVORITES.checked : FAVORITES.unChecked}</span>
            <span>{list.messageType}</span>
            <span>{list.campaignName}</span>
            <span>{list.clickRate}</span>
            <span>{list.createdAt}</span>
            <span>{list.sendingDate}</span>
            <span>{list.sendState}</span>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default CampaginGroupList;
