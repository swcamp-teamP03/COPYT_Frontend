import React from 'react';
import { FAVORITES } from '../../assets/Like';
// import useCopyLikeMutation from '../../../quries/Copy/useCopyLikeMutation';
// import { CopyGroup } from '../../../types/copy';
import * as S from '../CampaginGroupList/CampaginGroupList';

interface CampaginGroupListProps {
  // campaginList: CampaginGroup[];
  onClick: (id: number) => void;
}

const CampaginGroupList = ({ onClick }: CampaginGroupListProps) => {
  // const { mutate: copyLikeMutate } = useCopyLikeMutation();

  const handleLiked = (id: number) => {
    // copyLikeMutate(id);
  };

  return (
    <>
      <S.ListContainer>
        {/* {campaginList.map((list) => (
          <S.GroupList key={list.id}>
            <span onClick={() => handleLiked(list.id)}>{list.like ? FAVORITES.checked : FAVORITES.unChecked}</span>
            <span>{list.createDate}</span>
            <span onClick={() => onClick(list.id)}>{list.copyName}</span>
          </S.GroupList>
        ))} */}
      </S.ListContainer>
    </>
  );
};

export default CampaginGroupList;
