import React, { useReducer, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Layout } from './Layout.styles';
import styled from 'styled-components';
import CreateCondition from '../components/CreateCopy/CreateCondition';
import { conditionInit, conditionReducer } from '../components/CreateCopy/CreateCondition/conditionReducer';
import CopyList from '../components/CreateCopy/CopyList';
import { copyListState } from '../store/copyListState';
import { useRecoilState } from 'recoil';

const CreateCopy = () => {
  const [condition, conditionDispatch] = useReducer(conditionReducer, conditionInit);
  const [selectedCopy, setSelectedCopy] = useState<string[]>([]);
  const [copyList, setCopyList] = useRecoilState(copyListState);

  const isDisabeldSave = copyList.length === 0;

  return (
    <>
      <Layout size="M">
        <PageHeader buttonTitle="저장" buttonSize="buttonM" onClick={() => {}} buttonColor="black" isDisabled={isDisabeldSave}>
          카피 추천 받기
        </PageHeader>
        <GridLayout>
          <CreateCondition condition={condition} conditionDispatch={conditionDispatch} />
          <CopyList selectedCopy={selectedCopy} setSelectedCopy={setSelectedCopy} />
        </GridLayout>
      </Layout>
    </>
  );
};

export default CreateCopy;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;
