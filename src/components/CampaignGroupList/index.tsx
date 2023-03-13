import React from 'react';
import { FAVORITES } from '../../assets/Like';
// import useCopyLikeMutation from '../../../quries/Copy/useCopyLikeMutation';
import { CampaignsListType } from '../../types/campaign';
import * as S from './CampaginGroupList';

interface CampaginGroupListProps {
  campaignList: CampaignsListType[];
  onClick: (id: number) => void;
}

const CampaginGroupList = ({ campaignList, onClick }: CampaginGroupListProps) => {
  return (
    <>
      <S.ListContainer>
        {campaignList.map((list, i) => (
          <S.GroupList key={i}>
            <span>{list.campaignList ? FAVORITES.checked : FAVORITES.unChecked}</span>
            {/* <span>{list.createDate}</span> */}
            {/* <span onClick={() => onClick(list.id)}>{list.dsf}</span> */}
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default CampaginGroupList;
