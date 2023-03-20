import React, { useState, useEffect } from 'react';
import { CLIENT_SVG } from '../../../assets';
import * as S from './ClientGroupList';
import { useNavigate } from 'react-router-dom';
import useClientGroupsQuery from '../../../quries/Client/useClientGroupsQuery';
import Pagination from '../../common/Pagination';
import Group from '../group';
import { CHEVRON } from '../../../assets/Chevron';
import ListCount from '../../common/ListCount';

const ClientGroupList = () => {
  const [pageNum, setPageNum] = useState(0);
  const [listCount, setListCount] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();

  const { data: groupList } = useClientGroupsQuery(pageNum, listCount);

  console.log(groupList);
  const goDetail = (id: number) => {
    navigate(`/clients/${id}`);
  };

  useEffect(() => {
    if (groupList?.totalGroupCount) {
      const page = Math.ceil(groupList?.totalGroupCount / listCount);
      setTotalPage(page);
    }
  }, [groupList?.totalGroupCount]);

  return (
    <>
      <ListCount listCount={listCount} setListCount={setListCount} totalList={groupList?.totalGroupCount ?? 0} setPageNum={setPageNum} />
      <S.ListCategory>
        <div>즐겨찾기</div>
        <div>
          <span>생성일</span>
          {/* <div>{CHEVRON.verticalArrows}</div> */}
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
