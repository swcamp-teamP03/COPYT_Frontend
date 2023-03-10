import React from 'react';
import { useRecoilState } from 'recoil';
import { copyListState } from '../../../store/copyListState';
import { CopyListType } from '../../../types/copy';
import CopyListItem from '../CopyListItem';
import * as S from './CopyList.styles';

const CopyList = () => {
  const [copyList, setCopyList] = useRecoilState(copyListState);

  const handlePinned = (id: number) => {
    const target = copyList.filter((list) => list.id === id)[0];
    const index = copyList.indexOf(target);
    const data: CopyListType[] = JSON.parse(JSON.stringify(copyList));
    data[index].isPinned = data[index].isPinned ? false : true;
    const pinned = data.filter((list) => list.isPinned).sort((a, b) => a.id - b.id);
    const unPinned = data.filter((list) => !list.isPinned).sort((a, b) => a.id - b.id);
    setCopyList([...pinned, ...unPinned]);
  };

  return (
    <>
      <S.CopyListContainer>
        {copyList.length > 0 ? (
          <>
            <S.CopyCount>생성된 카피 수 {copyList.length}개</S.CopyCount>
            {copyList?.map((data, id) => (
              <CopyListItem data={data} key={id} handlePinned={handlePinned} />
            ))}
          </>
        ) : (
          <S.NonData>
            <p>조건을 작성하고 생성해주세요</p>
          </S.NonData>
        )}
      </S.CopyListContainer>
    </>
  );
};

export default CopyList;
