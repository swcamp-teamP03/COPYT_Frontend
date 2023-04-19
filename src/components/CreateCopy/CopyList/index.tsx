import React from 'react';
import { useRecoilState } from 'recoil';
import { NONE_LIST } from '../../../assets';
import { copyListState } from '../../../store/copyListState';
import { CopyListType } from '../../../types/copy';
import CopyListItem from '../CopyListItem';
import * as S from './CopyList.styles';

const CopyList = () => {
  const [copyList, setCopyList] = useRecoilState(copyListState);

  const handlePinned = (id: number) => {
    const target = copyList.filter((list) => list.copyId === id)[0];
    const index = copyList.indexOf(target);
    const data: CopyListType[] = JSON.parse(JSON.stringify(copyList));
    data[index].isPinned = data[index].isPinned ? false : true;
    const pinned = data.filter((list) => list.isPinned).sort((a, b) => a.copyId - b.copyId);
    const unPinned = data.filter((list) => !list.isPinned).sort((a, b) => a.copyId - b.copyId);
    setCopyList([...pinned, ...unPinned]);
  };

  return (
    <>
      <S.CopyListContainer>
        {copyList.length > 0 ? (
          <>
            <S.CopyCount>
              생성된 카피 수&nbsp;<span>{copyList.length}개</span>
            </S.CopyCount>
            {copyList?.map((data, id) => (
              <CopyListItem data={data} key={id} handlePinned={handlePinned} />
            ))}
          </>
        ) : (
          <S.NonData>
            <S.NonDataTitle>
              조건을 입력하고
              <br />
              다양한 카피를 추천받아보세요!
            </S.NonDataTitle>
            {NONE_LIST}
            <S.NondataFooter>Powered by GTP-3</S.NondataFooter>
          </S.NonData>
        )}
      </S.CopyListContainer>
    </>
  );
};

export default CopyList;
