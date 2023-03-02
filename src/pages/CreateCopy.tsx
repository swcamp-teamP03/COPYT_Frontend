import React, { useReducer, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Layout } from './Layout.styles';
import styled from 'styled-components';
import CreateCondition from '../components/CreateCopy/CreateCondition';
import CopyListItem from '../components/CreateCopy/CopyListItem';
import { conditionInit, conditionReducer } from '../components/CreateCopy/CreateCondition/conditionReducer';
import Modal from '../components/common/Modal';

const FakeData = [
  {
    id: 1,
    content: '테스트 1번',
  },
  {
    id: 2,
    content: '테스트2번',
  },
  {
    id: 3,
    content: '테스트3번',
  },
];

const CreateCopy = () => {
  const [condition, conditionDispatch] = useReducer(conditionReducer, conditionInit);
  const [selectedCopy, setSelectedCopy] = useState<string[]>([]);
  const [showLimitedModal, setShowLimitedModal] = useState(false);

  const fullSelected = selectedCopy.length === 2;

  const disabledCondition = Object.values(condition).includes('');

  const isAbledSubmit = !disabledCondition && fullSelected;

  const handelLimtedModal = () => {
    setShowLimitedModal((prev) => !prev);
  };

  const handleSubmit = () => {};

  const isSelectedCopy = (content: string) => {
    return selectedCopy.includes(content);
  };

  return (
    <>
      <Layout size="M">
        <PageHeader title="카피 추천 받기" buttonTitle="저장" buttonSize="buttonM" onClick={handleSubmit} buttonColor={!isAbledSubmit ? 'disabled' : 'black'} />
        <GridLayout>
          <CreateCondition condition={condition} conditionDispatch={conditionDispatch} disabledCondition={disabledCondition} />
          <CopyList>
            <span>선택된 카피 수 : {selectedCopy.length} / 2</span>
            {FakeData.map((data, idx) => (
              <CopyListItem
                content={data.content}
                key={idx}
                isSelected={isSelectedCopy(data.content)}
                setSelectedCopy={setSelectedCopy}
                fullSelected={fullSelected}
                setShowLimitedModal={setShowLimitedModal}
              />
            ))}
          </CopyList>
        </GridLayout>
      </Layout>
      <Modal.Frame isOpen={showLimitedModal} onClick={handelLimtedModal} height={'100px'}>
        <Modal.Body>
          <ModalBody>
            <span>카피 개수는 최대 2개까지만 선택 할 수 있어요.</span>
          </ModalBody>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handelLimtedModal}>확인</button>
        </Modal.Footer>
      </Modal.Frame>
    </>
  );
};

export default CreateCopy;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

const CopyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray0};
  padding: 40px;
  overflow-y: auto;
  span {
    margin-bottom: 10px;
    font-size: 24px;
  }
`;

const ModalBody = styled.div`
  height: 80px;
  font-weight: 700;
  font-size: 24px;
`;
