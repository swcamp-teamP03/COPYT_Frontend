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
          <S.GroupList key={list.copyId}>
            <div onClick={() => handleLiked(list.copyId)}>{list.favorite ? FAVORITES.checked : FAVORITES.unChecked}</div>
            <div>{list.createDate}</div>
            <div onClick={() => onClick(list.copyId)}>{list.copyName}</div>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default CopyGroupList;
