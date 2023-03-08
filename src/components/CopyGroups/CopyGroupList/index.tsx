import React from 'react';
import { FAVORITES } from '../../../assets/Like';
import useCopyLikeMutation from '../../../quries/Copy/useCopyLikeMutation';
import { CopyGroup } from '../../../types/copy';
import * as S from './CopyGroupList.styles';

interface CopyGroupListProps {
  copyList: CopyGroup[];
  onClick: (id: number) => void;
}

const CopyGroupList = ({ copyList, onClick }: CopyGroupListProps) => {
  const { mutate: copyLikeMutate } = useCopyLikeMutation();

  const handleLiked = (id: number) => {
    copyLikeMutate(id);
  };

  return (
    <>
      <S.ListContainer>
        {copyList.map((list) => (
          <S.GroupList key={list.id}>
            <span onClick={() => handleLiked(list.id)}>{list.like ? FAVORITES.checked : FAVORITES.unChecked}</span>
            <span>{list.createDate}</span>
            <span onClick={() => onClick(list.id)}>{list.copyName}</span>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default CopyGroupList;
