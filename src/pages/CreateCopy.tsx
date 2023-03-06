import React, { useReducer, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Layout } from './Layout.styles';
import styled from 'styled-components';
import CreateCondition from '../components/CreateCopy/CreateCondition';
import { conditionInit, conditionReducer } from '../components/CreateCopy/CreateCondition/conditionReducer';
import CopyList from '../components/CreateCopy/CopyList';
import { copyListState } from '../store/copyListState';
import { useRecoilState } from 'recoil';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';

const CreateCopy = () => {
  const [condition, conditionDispatch] = useReducer(conditionReducer, conditionInit);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [copyList, setCopyList] = useRecoilState(copyListState);

  const handleErrorModal = () => {
    setShowErrorModal((prev) => !prev);
  };

  const onSubmit = () => {
    if (copyList.length < 2) return handleErrorModal();
  };

  return (
    <>
      <Layout size="M">
        <PageHeader buttonTitle="저장" buttonSize="buttonM" onClick={onSubmit} buttonColor="black">
          카피 추천 받기
        </PageHeader>
        <GridLayout>
          <CreateCondition condition={condition} conditionDispatch={conditionDispatch} />
          <CopyList />
        </GridLayout>
      </Layout>
      <Modal.Frame isOpen={showErrorModal} onClick={handleErrorModal} height="150px">
        <Modal.Body>
          최소 2개 이상의 카피를 남겨주세요!
          <br />
          원하는 카피가 없다면 [카피 추천 받기] 버튼을 눌러
          <br />
          새로운 카피를 추천 받아보세요.
          <br />
          <p>*기존에 생성한 카피 문구는 유지됩니다.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button buttonColor="black" buttonSize="buttonS" onButtonClick={handleErrorModal} title="확인" />
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
