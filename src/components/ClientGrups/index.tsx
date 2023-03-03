import React, { useState } from 'react';
import * as S from './ClientGrupList';

interface ClientGroupListProps {
  totalCopy: number;
  copyList: {
    copyId: number;
    createDate: string;
    like: boolean;
    copyName: string;
    tag: string;
  }[];
}

const LIST_COUNT = [10, 30, 50];

const ClientGroupList: React.FC<ClientGroupListProps> = ({ totalCopy, copyList }) => {
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
        <div>전체 {totalCopy}개</div>
        <S.VerticalHr />
        <div>목록 개수</div>
        <S.Footer>
          <S.ListCount onClick={handleCountDropDown}>
            <span>{listCount}개</span>/{/* {CHEVRON.down} */}하이
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
      </S.TagContainer>
      <hr />
      <S.ListCategory>
        <div>즐겨찾기</div>
        <div>
          <span>생성일</span>
          위아래 태그{/* <div>{SVG.verticalArrows}</div> */}
        </div>
        <div>그룹명</div>
        <div>파일</div>
      </S.ListCategory>
      <S.ListContainer>
        {copyList.map((list) => (
          <S.GroupList key={list.copyId}>
            고객수{/* <span>{list.like ? FAVORITES.checked : FAVORITES.unChecked}</span> */}
            <span>{list.createDate}</span>
            <span>{list.copyName}</span>
            <div>
              <S.TagButton>{list.tag}</S.TagButton>
            </div>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default ClientGroupList;
