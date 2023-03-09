import React, { useState, useEffect } from 'react';
import { CLIENT_SVG } from '../../../assets';
import * as S from './ClientGroupList';
import PageHeader from '../../common/PageHeader';
import { useNavigate } from 'react-router-dom';
import useClientGroupsQuery from '../../../quries/useClientGrupsMutation';
import Pagination from '../../common/Pagination';
import ClientGroup from '../group';

const LIST_COUNT = [10, 30, 50];

const ClientGroupList = () => {
  const [groupNum, setGroupNum] = useState(0);
  const [showCountDropDown, setShowCountDropDown] = useState(false);
  const [listCount, setListCount] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();
  const { data: groupList } = useClientGroupsQuery(groupNum, listCount);

  useEffect(() => {
    if (groupList?.totalgroup) {
      const page = Math.ceil(groupList?.totalgroup / listCount);
      setTotalPage(page);
    }
  }, [groupList?.totalgroup]);
  console.log(groupList);

  const handleCountDropDown = () => {
    setShowCountDropDown((prev) => !prev);
  };
  const onCreatehandler = () => {
    navigate('/clients/create');
  };

  return (
    <>
      <PageHeader
        buttonTitle="고객 그룹 작성"
        buttonSize="buttonL"
        onClick={() => {
          navigate('/clients/create');
        }}
      >
        고객 그룹 리스트
      </PageHeader>

      {/* <S.HeaderLayout>
        <S.HeaderSection>
          {CLIENT_SVG.serch}
          <input
            type={'text'}
            placeholder={'고객 그룹 검색'}
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
      </S.HeaderLayout> */}
      <hr
        style={{
          color: 'gray',
        }}
      />

      <S.TaxtContainer>
        <div>전체 개</div>
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
        <div>그룹명 </div>
        <div>고객수</div>
      </S.ListCategory>
      {groupList ? <ClientGroup clientList={groupList.groupList} /> : <S.NoneSvg>{CLIENT_SVG.noneList}</S.NoneSvg>}
      {totalPage > 1 && <Pagination totalPage={totalPage} setPageNum={setGroupNum} pageNum={groupNum} />}
    </>
  );
};

export default ClientGroupList;
