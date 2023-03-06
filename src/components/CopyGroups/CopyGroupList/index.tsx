import React, { useState } from 'react';
import { CHEVRON, FAVORITES } from '../../../assets';
import { CopyGroup } from '../../../types/copy';
import * as S from './CopyGroupList.styles';

interface CopyGroupListProps {
  copyList: CopyGroup[];
}

const CopyGroupList = ({ copyList }: CopyGroupListProps) => {
  return (
    <>
      <S.ListContainer>
        {copyList.map((list) => (
          <S.GroupList key={list.copyId}>
            <span>{list.like ? FAVORITES.checked : FAVORITES.unChecked}</span>
            <span>{list.createDate}</span>
            <span>{list.copyName}</span>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default CopyGroupList;
