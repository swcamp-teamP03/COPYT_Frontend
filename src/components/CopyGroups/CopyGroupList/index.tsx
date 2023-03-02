import React from 'react';
import { SVG } from '../../../assets';
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
      <div>보기</div>
      <S.TagContainer>
        {copyList.map((list) => (
          <button key={list.copyId}>{list.tag}</button>
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
            <span>별</span>
            <span>{list.createDate}</span>
            <span>{list.copyName}</span>
            <div>
              <button>{list.tag}</button>
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
