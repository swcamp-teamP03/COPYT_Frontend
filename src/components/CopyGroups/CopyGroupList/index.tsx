import React from 'react';
import { FAVORITES, SVG } from '../../../assets';
import * as S from './CopyGroupList.styles';

interface CopyData {
  copyId: number;
  createDate: string;
  like: boolean;
  copyName: string;
  tag: string;
}

interface CopyGroupListProps {
  totalCopy: number;
  copyList: CopyData[];
}

const CopyGroupList = ({ totalCopy, copyList }: CopyGroupListProps) => {
  return (
    <>
      <span>보기</span>
      <S.TagContainer>
        {copyList.map((list) => (
          <S.TagButton key={list.copyId}>{list.tag}</S.TagButton>
        ))}
      </S.TagContainer>
      <hr />
      <S.ListCategory>
        <div>즐겨찾기</div>
        <div>
          <span>생성일</span>
          <div>{SVG.verticalArrows}</div>
        </div>
        <div>카피그룹명</div>
        <div>태그</div>
      </S.ListCategory>
      <S.ListContainer>
        {copyList.map((list) => (
          <S.GroupList key={list.copyId}>
            <span>{list.like ? FAVORITES.checked : FAVORITES.unChecked}</span>
            <span>{list.createDate}</span>
            <span>{list.copyName}</span>
            <div>
              <S.TagButton>{list.tag}</S.TagButton>
            </div>
          </S.GroupList>
        ))}
      </S.ListContainer>
      <S.Footer>
        <div>전체 {totalCopy}개</div>
        <S.VerticalHr />
        <div>목록 개수</div>
      </S.Footer>
    </>
  );
};

export default CopyGroupList;
