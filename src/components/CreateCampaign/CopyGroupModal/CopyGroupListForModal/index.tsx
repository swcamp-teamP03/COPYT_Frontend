import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { CHEVRON } from '../../../../assets/Chevron';
import useCopyGroupsQuery from '../../../../quries/Copy/useCopyGroupsQuery';
import { campaignConditionState } from '../../../../store/campaignConditionState';
import Pagination from '../../../common/Pagination';
import CopyGroupList from '../../../CopyGroups/CopyGroupList';
import ListCount from '../../../common/ListCount';

const CopyGroupListForModal = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);

  const [listCount, setListCount] = useState(10);
  const [pageNum, setPageNum] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const { data: groupList } = useCopyGroupsQuery(pageNum, listCount);

  const onClickGroup = (id: number) => {
    setCondition((prev) => ({
      ...prev,
      copyGroupId: id,
      copyGroupName: groupList?.groupList.filter((list) => list.copyId === id)[0].copyName ?? '',
    }));
  };

  useEffect(() => {
    if (groupList?.totalCopy) {
      const page = Math.ceil(groupList?.totalCopyCount / listCount);
      setTotalPage(page);
    }
  }, [groupList?.totalCopyCount, listCount]);

  if (!groupList) {
    return null;
  }

  return (
    <div>
      <h4>카피 그룹 선택</h4>
      <ListCount listCount={listCount} setListCount={setListCount} totalList={groupList.totalCopyCount} setPageNum={setPageNum} />
      <ListCategory>
        <div>즐겨찾기</div>
        <div>
          <span>생성일</span>
          <div>{CHEVRON.verticalArrows}</div>
        </div>
        <div>카피그룹명</div>
      </ListCategory>
      {groupList && <CopyGroupList copyList={groupList.groupList} onClick={onClickGroup} />}
      {groupList?.totalCopy > 1 && <Pagination totalPage={totalPage} setPageNum={setPageNum} pageNum={pageNum} />}
    </div>
  );
};
export default CopyGroupListForModal;

const ListCategory = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 4fr;
  margin-bottom: 20px;
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
