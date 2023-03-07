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
import { COPY_MESSAGE } from '../constants/copyMessage';
import ScantyModal from '../components/CreateCopy/ScantyModal';

const CreateCopy = () => {
  const [condition, conditionDispatch] = useReducer(conditionReducer, conditionInit);
  const [showScantyModal, setShowScantyModal] = useState(false);
  const [copyList, setCopyList] = useRecoilState(copyListState);

  const handleScantyModal = () => {
    setShowScantyModal((prev) => !prev);
  };

  const onSubmit = () => {
    if (copyList.length < 2) return handleScantyModal();
  };

  return (
    <>
      <Layout size="M">
        <PageHeader buttonTitle="저장" buttonSize="buttonM" onClick={onSubmit} buttonColor="black">
          카피 추천 받기
        </PageHeader>
        <GridLayout>
          <CreateCondition condition={condition} conditionDispatch={conditionDispatch} />
          <CopyList copyList={copyList} setCopyList={setCopyList} />
        </GridLayout>
      </Layout>
      <ScantyModal showScantyModal={showScantyModal} handleScantyModal={handleScantyModal} />
    </>
  );
};

export default CreateCopy;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;
