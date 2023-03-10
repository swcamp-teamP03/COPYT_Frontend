import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CHEVRON } from '../assets/Chevron';
import PageHeader from '../components/common/PageHeader';
import CopyGroupList from '../components/CopyGroups/CopyGroupList';
import ListCount from '../components/common/ListCount';
import NonCopyGroupList from '../components/CopyGroups/NonCopyGroupList';
import Pagination from '../components/common/Pagination';
import useCopyGroupsQuery from '../quries/Copy/useCopyGroupsQuery';
import { Layout } from './Layout.styles';

const CopyGroups = () => {
  const [listCount, setListCount] = useState(10);
  const [pageNum, setPageNum] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();

  const { data: groupList } = useCopyGroupsQuery(pageNum, listCount);

  const goDetail = (id: number) => {
    navigate(`/copies/${id}`);
  };

  useEffect(() => {
    if (groupList?.totalCopy) {
      const page = Math.ceil(groupList?.totalCopy / listCount);
      setTotalPage(page);
    }
  }, [groupList?.totalCopy]);

  return (
    <Layout size="S">
      <PageHeader
        buttonTitle="카피 추천 받기"
        buttonSize="buttonL"
        onClick={() => {
          navigate('/copies/create');
        }}
      >
        카피그룹 리스트
      </PageHeader>
      <ListCount listCount={listCount} setListCount={setListCount} totalCopy={groupList?.totalCopy ?? 0} />
      <ListCategory>
        <div>즐겨찾기</div>
        <div>생성일</div>
        <div>카피그룹명</div>
      </ListCategory>
      {groupList ? <CopyGroupList copyList={groupList.groupList} onClick={goDetail} /> : <NonCopyGroupList />}
      {totalPage > 1 && <Pagination totalPage={totalPage} setPageNum={setPageNum} pageNum={pageNum} />}
    </Layout>
  );
};

export default CopyGroups;

const ListCategory = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 10px;
  grid-template-columns: 0.5fr 1fr 4fr;
  margin-bottom: 20px;
  white-space: nowrap;
  div {
    display: flex;
    justify-content: center;
  }
  div:nth-child(2) {
    gap: 30px;
  }
  div:nth-child(3) {
    justify-content: flex-start;
  }
`;
