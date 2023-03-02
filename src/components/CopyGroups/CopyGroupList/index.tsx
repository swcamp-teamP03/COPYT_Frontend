import React, { useState } from 'react';
import { CHEVRON, FAVORITES, SVG } from '../../../assets';
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
const LIST_COUNT = [10, 30, 50];

const CopyGroupList = ({ totalCopy, copyList }: CopyGroupListProps) => {
  const [showCountDropDown, setShowCountDropDown] = useState(false);
  const [selectedTag, setSelectedTag] = useState('전체');
  const [listCount, setListCount] = useState(10);

  const handleSelectedTag = (tag: string) => {
    setSelectedTag(tag);
  };
  const isSelectedTag = (tag: string) => {
    return selectedTag === tag;
  };

  const handleCountDropDown = () => {
    setShowCountDropDown((prev) => !prev);
  };

  return (
    <>
      <span>보기</span>
      <S.TagContainer>
        <S.TagButton onClick={() => handleSelectedTag('전체')} isSelectedTag={isSelectedTag('전체')}>
          전체
        </S.TagButton>
        {copyList.map((list) => (
          <S.TagButton key={list.copyId} onClick={() => handleSelectedTag(list.tag)} isSelectedTag={isSelectedTag(list.tag)}>
            {list.tag}
          </S.TagButton>
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
        <S.ListCount onClick={handleCountDropDown}>
          <span>{listCount}개</span>
          {CHEVRON.down}
          {showCountDropDown && (
            <S.DropDownContainer>
              {LIST_COUNT.map((count) => (
                <div key={count} onClick={() => setListCount(count)}>
                  {count}
                </div>
              ))}
            </S.DropDownContainer>
          )}
        </S.ListCount>
      </S.Footer>
    </>
  );
};

export default CopyGroupList;
