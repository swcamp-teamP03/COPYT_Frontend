import React, { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { SelecetedMessage } from '..';
import { CHEVRON } from '../../../../assets/Chevron';
import { PIN } from '../../../../assets/Like';
import useCopyDetailQuery from '../../../../quries/Copy/useCopyDetailQuery';
import { campaignConditionState } from '../../../../store/campaignConditionState';

interface CopyListForModalProps {
  setSelecetedMessage: Dispatch<SetStateAction<SelecetedMessage[]>>;
  selectedMesssage: SelecetedMessage[];
}

const CopyListForModal = ({ setSelecetedMessage, selectedMesssage }: CopyListForModalProps) => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const { data: copyDetail } = useCopyDetailQuery(condition.copyGroupID?.toString());

  const isSelected = (id: number) => {
    return selectedMesssage.find((list) => list.id === id) ? true : false;
  };

  const limiteSelect = condition.abTest ? 2 : 1;

  const handleSelectCopy = (id: number) => {
    if (isSelected(id) || !copyDetail || selectedMesssage.length === limiteSelect) return;
    const targetContent = copyDetail.copyList.filter((list) => list.id === id)[0].content;
    setSelecetedMessage((prev) => [...prev, { id, content: targetContent }]);
  };

  const goBack = () => {
    setCondition((prev) => ({
      ...prev,
      copyGroupName: '',
      copyGroupID: 0,
    }));
    setSelecetedMessage([]);
  };

  const isPinnedList = copyDetail?.copyList.filter((list) => list.isPinned);
  const isNotPinnedList = copyDetail?.copyList.filter((list) => !list.isPinned);

  return (
    <div>
      <h4>카피 그룹 선택 &gt; 카피 선택</h4>
      <Title>
        <div>
          <LeftChevron onClick={goBack}>{CHEVRON.left}</LeftChevron>
          <h3>{copyDetail?.copyGroupName}</h3>
        </div>
        <div>생성된 카피 수 {copyDetail?.createCount}개</div>
      </Title>
      <ListContainer>
        {isPinnedList?.map((copy) => (
          <CopyItem onClick={() => handleSelectCopy(copy.id)} isSelected={isSelected(copy.id)} key={copy.id}>
            {copy.content}
            <CopyItemFooter>
              <div>{copy.isPinned ? PIN.pinned : PIN.unpinned}</div>
              <div>{copy.content.length} / 1,000</div>
            </CopyItemFooter>
          </CopyItem>
        ))}
        {isNotPinnedList?.map((copy) => (
          <CopyItem onClick={() => handleSelectCopy(copy.id)} isSelected={isSelected(copy.id)} key={copy.id}>
            {copy.content}
            <CopyItemFooter>
              <div>{copy.isPinned ? PIN.pinned : PIN.unpinned}</div>
              <div>{copy.content.length} / 1,000</div>
            </CopyItemFooter>
          </CopyItem>
        ))}
      </ListContainer>
    </div>
  );
};

export default CopyListForModal;

const Title = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  div {
    gap: 14px;
    display: flex;
    align-items: center;
  }
`;

const LeftChevron = styled.div`
  cursor: pointer;
  width: 14px;
  height: 14px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`;

interface CopyItemProps {
  isSelected: boolean;
}

const CopyItem = styled.div<CopyItemProps>`
  cursor: pointer;
  padding: 12px 16px;
  background-color: ${(props) => (props.isSelected ? '#F6F7FF' : 'white')};
  border: 1px solid ${(props) => (props.isSelected ? '#5549ff' : props.theme.colors.gray20)};
  border-radius: 30px;
  :hover {
    border: 1px solid #5549ff;
  }
`;

const CopyItemFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray50};
`;
