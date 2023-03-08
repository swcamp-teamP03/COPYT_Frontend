import React, { Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { CHEVRON } from '../../../../assets/Chevron';
import { PIN } from '../../../../assets/Like';
import useCopyDetailQuery from '../../../../quries/Copy/useCopyDetailQuery';
import { campaignConditionState } from '../../../../store/campaignConditionState';

interface CopyListForModalProps {
  setSelecetedMessage: Dispatch<SetStateAction<{ A: string; B: string }>>;
  selectedMesssage: { A: string; B: string };
}

const CopyListForModal = ({ setSelecetedMessage, selectedMesssage }: CopyListForModalProps) => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const { data: copyDetail } = useCopyDetailQuery(condition.copyGroupID.toString());

  const isSelected = (id: number) => {
    return condition.selectedCopyIds.includes(id);
  };

  const handleSelectCopy = (id: number) => {
    if (isSelected(id) || !copyDetail || (selectedMesssage.A && selectedMesssage.B)) return;
    setCondition((prev) => ({
      ...prev,
      selectedCopyIds: condition.selectedCopyIds.concat(id),
    }));
    const targetContent = copyDetail.copyList.filter((list) => list.id === id)[0].content;
    if (selectedMesssage.A) {
      setSelecetedMessage((prev) => ({ ...prev, B: targetContent }));
    } else {
      setSelecetedMessage((prev) => ({ ...prev, A: targetContent }));
    }
  };

  const goBack = () => {
    setCondition((prev) => ({
      ...prev,
      group_name: '',
      copyGroupID: 0,
    }));
  };

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
        {copyDetail?.copyList.map((copy) => (
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
  padding: 12px 16px;
  background-color: ${(props) => (props.isSelected ? '#eaeaea' : 'white')};
  border-radius: 30px;
  :hover {
    border: 2px solid #424242;
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
