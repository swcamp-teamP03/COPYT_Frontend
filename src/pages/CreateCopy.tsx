import React, { useReducer, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import styled from 'styled-components';
import CreateCopyCondition from '../components/CreateCopy/CreateCopyCondition';
import { copyConditionInit, copyConditionReducer } from '../components/CreateCopy/CreateCopyCondition/copyConditionReducer';
import CopyList from '../components/CreateCopy/CopyList';
import ScantyModal from '../components/CreateCopy/ScantyModal';
import { CopyListType } from '../types/copy';
import useUpdateCopyMutation from '../quries/Copy/useUpdateCopyMutation';
import { useNavigate, useParams } from 'react-router-dom';

const CreateCopy = () => {
  const [condition, conditionDispatch] = useReducer(copyConditionReducer, copyConditionInit);
  const [showScantyModal, setShowScantyModal] = useState(false);
  const [copyList, setCopyList] = useState<CopyListType[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const { mutate: updateCopyMutate } = useUpdateCopyMutation();

  const handleScantyModal = () => {
    setShowScantyModal((prev) => !prev);
  };

  const onSubmit = () => {
    if (copyList.length < 2) return handleScantyModal();
    updateCopyMutate({ id, list: copyList });
    navigate(-1);
  };

  return (
    <>
      <PageHeader buttonTitle="저장" buttonSize="buttonM" onClick={onSubmit} buttonColor="blue">
        카피 추천 받기
      </PageHeader>
      <GridLayout>
        <CreateCopyCondition condition={condition} conditionDispatch={conditionDispatch} copyList={copyList} setCopyList={setCopyList} />
        <CopyList copyList={copyList} setCopyList={setCopyList} />
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
