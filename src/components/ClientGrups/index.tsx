import React, { useState } from 'react';
import Button from '../common/Button';
import * as S from './ClientGrupList';

interface ClientGroupListProps {
  totalGroup: number;
  groupList: {
    customerGroupId: number;
    groupName: string;
    customerCnt: number;
    favorite: boolean;
    csvUploadCheck: boolean;
    date: string;
  }[];
}

const LIST_COUNT = [10, 30, 50];

const ClientGroupList: React.FC<ClientGroupListProps> = ({ totalGroup, groupList }) => {
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
      <h1>고객 그룹 설정</h1>
      <button>그룹추가</button>
      <hr />
      <S.TagContainer>
        <div>전체 {totalGroup}개</div>
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
      <S.ListCategory>
        <div>즐겨찾기</div>
        <div>
          <span>생성일</span>
          위아래 태그{/* <div>{SVG.verticalArrows}</div> */}
        </div>
        <div>그룹명</div>
      </S.ListCategory>
      <S.ListContainer>
        {groupList.map((list) => (
          <S.GroupList key={list.customerGroupId}>
            고객수{/* <span>{list.like ? FAVORITES.checked : FAVORITES.unChecked}</span> */}
            <span>{list.date}</span>
            <span>{list.groupName}</span>
            <span>{list.customerCnt}</span>
            <div>파일</div>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default ClientGroupList;
