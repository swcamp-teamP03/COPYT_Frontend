import React, { useState } from 'react';
import { CLIENT_SVG } from '../../assets';
import * as S from './ClientGroupList';
import Button from '../common/Button';

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
  const [listCount, setListCount] = useState(10);

  const handleCountDropDown = () => {
    setShowCountDropDown((prev) => !prev);
  };

  return (
    <>
      <S.HeaderLayout>
        <h1>고객 그룹 설정</h1>
        <Button title="그룹추가" buttonColor="black" borderRadius="10px"></Button>
      </S.HeaderLayout>
      <S.HeaderLayout>
        <S.HeaderSection>
          {CLIENT_SVG.serch}
          <input
            type={'text'}
            defaultValue={'고객 그룹 검색'}
            style={{
              border: 'none',
              fontSize: '17px',
              color: 'gray',
            }}
          />
        </S.HeaderSection>
        <S.HeaderSection>
          <div>
            <input type={'date'} style={{ border: 'none' }} /> ~ <input type={'date'} style={{ border: 'none' }} />
          </div>
        </S.HeaderSection>
      </S.HeaderLayout>
      <hr
        style={{
          color: 'gray',
        }}
      />
      <S.TaxtContainer>
        <div>전체 {totalGroup}개</div>
        <S.VerticalHr />
        <div>목록 개수</div>
        <S.Footer>
          <S.ListCount onClick={handleCountDropDown}>
            <span>{listCount}개</span>
            {CLIENT_SVG.arrowFlutter}
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
      </S.TaxtContainer>
      <S.ListCategory>
        <div>즐겨찾기</div>
        <div>
          <span>생성일</span>
          <div>{CLIENT_SVG.verticalArrow}</div>
        </div>
        <div>그룹명</div>
        <div>고객수</div>
      </S.ListCategory>
      <S.ListContainer>
        {groupList.map((list) => (
          <S.GroupList key={list.customerGroupId}>
            <span>{list.favorite ? CLIENT_SVG.star : CLIENT_SVG.unStar}</span>
            <span>{list.date}</span>
            <span>{list.groupName}</span>
            <span>{list.customerCnt}</span>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default ClientGroupList;
