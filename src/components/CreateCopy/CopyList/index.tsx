import React, { Dispatch, SetStateAction, useState } from 'react';
import { useRecoilState } from 'recoil';
import { copyListState } from '../../../store/copyListState';
import { CopyListType } from '../../../types/copy';
import CopyListItem from '../CopyListItem';
import * as S from './CopyList.styles';

interface CopyListProps {
  selectedCopy: string[];
  setSelectedCopy: Dispatch<SetStateAction<string[]>>;
}

const CopyList = ({ selectedCopy, setSelectedCopy }: CopyListProps) => {
  const [copyList, setCopyList] = useRecoilState(copyListState);

  const isSelectedCopy = (content: string) => {
    return selectedCopy.includes(content);
  };
  console.log(copyList);

  return (
    <>
      <S.CopyListContainer>
        {copyList.length > 0 ? (
          copyList?.map((data, id) => <CopyListItem data={data} key={id} isSelected={isSelectedCopy(data.content)} />)
        ) : (
          <S.NonData>
            <span>조건을 작성하고 생성해주세요</span>
          </S.NonData>
        )}
      </S.CopyListContainer>
    </>
  );
};

export default CopyList;
