import React, { useEffect, useReducer, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import styled from 'styled-components';
import CreateCopyCondition from '../components/CreateCopy/CreateCopyCondition';
import { copyConditionInit, copyConditionReducer } from '../components/CreateCopy/CreateCopyCondition/copyConditionReducer';
import CopyList from '../components/CreateCopy/CopyList';
import ScantyModal from '../components/CreateCopy/ScantyModal';
import useCreateCopyGroupMutation from '../quries/Copy/useCreateCopyGroupMutation';
import { useRecoilState } from 'recoil';
import { copyListState } from '../store/copyListState';

const CreateCopy = () => {
  const [condition, conditionDispatch] = useReducer(copyConditionReducer, copyConditionInit);
  const [showScantyModal, setShowScantyModal] = useState(false);
  const [copyList, setCopyList] = useRecoilState(copyListState);

  const { mutate: createCopyGroupMutate } = useCreateCopyGroupMutation();

  const handleScantyModal = () => {
    setShowScantyModal((prev) => !prev);
  };

  const onSubmit = () => {
    if (copyList.length < 2) return handleScantyModal();
    const result = { ...condition, keyword: condition.keyword.join('') };
    createCopyGroupMutate({ condition: result, copyList });
  };

  useEffect(() => {
    setCopyList([]);
  }, []);

  return (
    <>
      <PageHeader buttonTitle="저장" buttonSize="buttonM" onClick={onSubmit} buttonColor="blue">
        카피 추천 받기
      </PageHeader>
      <GridLayout>
        <CreateCopyCondition condition={condition} conditionDispatch={conditionDispatch} />
        <CopyList />
      </GridLayout>
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
