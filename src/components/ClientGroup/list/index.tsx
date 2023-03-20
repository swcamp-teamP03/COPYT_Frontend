import React, { useState, useEffect } from 'react';
import { CLIENT_SVG } from '../../../assets';
import * as S from './ClientGroupList';
import { useNavigate } from 'react-router-dom';
import useClientGroupsQuery from '../../../quries/Client/useClientGroupsQuery';
import Pagination from '../../common/Pagination';
import Group from '../group';
import { CHEVRON } from '../../../assets/Chevron';
import DropDwown from '../../common/DropDown';

const LIST_COUNT = [10, 30, 50];

const ClientGroupList = () => {
  const [pageNum, setPageNum] = useState(0);
  const [showCountDropDown, setShowCountDropDown] = useState(false);
  const [listCount, setListCount] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();

  const { data: groupList } = useClientGroupsQuery(pageNum, listCount);

  const handleListCount = (count: number) => {
    setListCount(count);
    handleCountDropDown;
  };

  const goDetail = (id: number) => {
    navigate(`/clients/${id}`);
  };

  useEffect(() => {
    if (groupList?.totalGroupCount) {
      const page = Math.ceil(groupList?.totalGroupCount / listCount);
      setTotalPage(page);
    }
  }, [groupList?.totalGroupCount]);

  const handleCountDropDown = () => {
    setShowCountDropDown((prev) => !prev);
  };

  return (
    <>
      <S.TaxtContainer>
        <div>전체 {groupList?.totalGroupCount}개</div>
        <S.VerticalHr />
        <div>목록 개수</div>
        <S.Footer>
          <S.ListCount onClick={handleCountDropDown}>
            <span>{listCount}개</span>
            {CHEVRON.down}
            {showCountDropDown && <DropDwown list={LIST_COUNT} base={listCount} handler={handleListCount} />}
          </S.ListCount>
        </S.Footer>
      </S.TaxtContainer>
      <S.ListCategory>
        <div>즐겨찾기</div>
        <div>
          <span>생성일</span>
          <div>{CHEVRON.verticalArrows}</div>
        </div>
        <div>그룹명 </div>
        <div>고객수</div>
      </S.ListCategory>
      {groupList?.totalGroupCount ? <Group clientList={groupList?.groupList} onClick={goDetail} /> : <S.NoneSvg>{CLIENT_SVG.noneList}</S.NoneSvg>}
      {totalPage > 1 && <Pagination totalPage={totalPage} setPageNum={setPageNum} pageNum={pageNum} />}
    </>
  );
};

export default ClientGroupList;
