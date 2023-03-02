import React, { Dispatch, SetStateAction, useState } from 'react';
import { POST_SVG } from '../../../assets';
import * as S from './CopyListItem.styles';

interface CopyListItemProps {
  content: string;
  isSelected: boolean;
  setSelectedCopy: Dispatch<SetStateAction<string[]>>;
  fullSelected: boolean;
  setShowLimitedModal: Dispatch<SetStateAction<boolean>>;
}

const CopyListItem = ({ content, isSelected, setSelectedCopy, fullSelected, setShowLimitedModal }: CopyListItemProps) => {
  const removeSelected = () => {
    setSelectedCopy((prev) => prev.filter((selected) => selected !== content));
  };

  const addSelected = () => {
    if (fullSelected) {
      return setShowLimitedModal(true);
    } else {
      setSelectedCopy((prev) => prev.concat(content));
    }
  };

  return (
    <S.Container isSelected={isSelected} onClick={isSelected ? removeSelected : addSelected}>
      {content}
      <S.Footer>
        <div>{POST_SVG.declation}</div>
        <div>
          <div>{POST_SVG.copy}</div>
          <div>{POST_SVG.edit}</div>
        </div>
      </S.Footer>
    </S.Container>
  );
};

export default CopyListItem;
