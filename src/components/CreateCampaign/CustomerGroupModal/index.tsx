import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { FAVORITES } from '../../../assets/Like';
import useCopyGroupsQuery from '../../../quries/Copy/useCopyGroupsQuery';
import useCopyLikeMutation from '../../../quries/Copy/useCopyLikeMutation';
import { campaignConditionState } from '../../../store/campaignConditionState';
import Button from '../../common/Button';
import Modal from '../../common/Modal';
import Pagination from '../../common/Pagination';
import ListCount from '../../CopyGroups/ListCount';

interface CustomerGroupModalProps {
  isOpen: boolean;
  handler: () => void;
}

const CustomerGroupModal = ({ isOpen, handler }: CustomerGroupModalProps) => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [listCount, setListCount] = useState(10);
  const [selectedGroup, setSelctedGroup] = useState({ id: 0, name: '' });
  const [pageNum, setPageNum] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const { data: groupList } = useCopyGroupsQuery(pageNum, listCount);

  const { mutate: copyLikeMutate } = useCopyLikeMutation();

  const handleLiked = (id: number) => {
    copyLikeMutate(id);
  };

  const isSelected = (id: number) => {
    return selectedGroup.id === id;
  };

  const onClickGroup = (id: number) => {
    setSelctedGroup({ id, name: groupList?.groupList.filter((list) => list.id === id)[0].copyName ?? '' });
  };

  const onSave = () => {
    setCondition((prev) => ({
      ...prev,
      customerGroupID: selectedGroup.id,
      customerGroupName: selectedGroup.name,
    }));
    handler();
  };

  useEffect(() => {
    if (groupList?.totalCopy) {
      const page = Math.ceil(groupList?.totalCopy / listCount);
      setTotalPage(page);
    }
  }, [groupList?.totalCopy]);

  return (
    <Modal.Frame isOpen={isOpen} onClick={handler} height="70%" width="50%">
      <Modal.Header onClick={handler}>고객 그룹 불러오기</Modal.Header>
      <Modal.Body>
        <h4>고객 그룹 선택</h4>
        <ListCount listCount={listCount} setListCount={setListCount} totalCopy={groupList?.totalCopy ?? 0} />
        <ListCategory>
          <div>즐겨찾기</div>
          <div>
            <span>생성일</span>
          </div>
          <div>고객 그룹명</div>
          <div>고객 수</div>
        </ListCategory>
        <ListContainer>
          {groupList?.groupList.map((list) => (
            <GroupList key={list.id} isSelected={isSelected(list.id)} onClick={() => onClickGroup(list.id)}>
              <span onClick={() => handleLiked(list.id)}>{list.like ? FAVORITES.checked : FAVORITES.unChecked}</span>
              <span>{list.createDate}</span>
              <span>{list.copyName}</span>
            </GroupList>
          ))}
        </ListContainer>

        {totalPage > 1 && <Pagination totalPage={totalPage} setPageNum={setPageNum} pageNum={pageNum} />}
        <ButtonWrapper>
          <Button title="선택 그룹 적용" buttonColor="black" buttonSize="buttonM" onButtonClick={onSave} isDisabled={!selectedGroup.id} />
        </ButtonWrapper>
      </Modal.Body>
    </Modal.Frame>
  );
};

export default CustomerGroupModal;

const ListCategory = styled.div`
  margin-top: 1.5rem;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 3fr 1fr;
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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

interface GroupListProps {
  isSelected: boolean;
}

export const GroupList = styled.div<GroupListProps>`
  display: grid;
  cursor: pointer;
  gap: 10px;
  grid-template-columns: 1fr 1fr 4fr;
  height: 82px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f6f7ff;
  font-size: 18px;
  border: ${(props) => (props.isSelected ? '1px solid #5549FF' : 'none')};
  span,
  div {
    display: flex;
    justify-content: center;
    color: #777777;
  }
  span:nth-child(3) {
    justify-content: flex-start;
    font-weight: 700;
    font-size: 21px;
    color: #444444;
  }
  :hover {
    border: 2px solid rgba(85, 73, 255, 0.4);
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
`;
