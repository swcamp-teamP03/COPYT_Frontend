import React from 'react';
import { PIN, POST_SVG } from '../../../assets';
import { CopyListType } from '../../../types/copy';
import * as S from './CopyListItem.styles';

interface CopyListItemProps {
  data: CopyListType;
  isSelected: boolean;
  handlePinned: (id: number) => void;
}

const CopyListItem = ({ data, isSelected, handlePinned }: CopyListItemProps) => {
  return (
    <S.Container isSelected={isSelected}>
      {data.content}
      <S.Footer>
        <div>{POST_SVG.declation}</div>
        <div>
          <div onClick={() => handlePinned(data.id)}>{data.isPinned ? PIN.pinned : PIN.unpinned}</div>
          <div>{POST_SVG.copy}</div>
          <div>{POST_SVG.edit}</div>
        </div>
      </S.Footer>
    </S.Container>
  );
};

export default CopyListItem;
