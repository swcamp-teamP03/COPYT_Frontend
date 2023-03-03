import React, { useReducer, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Layout } from './Layout.styles';
import styled from 'styled-components';
import CreateCondition from '../components/CreateCopy/CreateCondition';
import { conditionInit, conditionReducer } from '../components/CreateCopy/CreateCondition/conditionReducer';
import Modal from '../components/common/Modal';
import CopyList from '../components/CreateCopy/CopyList';

const FakeData = [
  {
    content: '테스트 1번',
  },
  {
    content: '테스트2번',
  },
  {
    content: '테스트3번',
  },
];

const CreateCopy = () => {
  const [condition, conditionDispatch] = useReducer(conditionReducer, conditionInit);
  const [selectedCopy, setSelectedCopy] = useState<string[]>([]);

  const disabledCondition = Object.values(condition).includes('');

  const isAbledSubmit = !disabledCondition;

  const handleSubmit = () => {};

  return (
    <>
      <Layout size="M">
        <PageHeader buttonTitle="저장" buttonSize="buttonM" onClick={handleSubmit} buttonColor="black" isDisabled={!isAbledSubmit}>
          카피 추천 받기
        </PageHeader>
        <GridLayout>
          <CreateCondition condition={condition} conditionDispatch={conditionDispatch} disabledCondition={disabledCondition} />
          <CopyList data={FakeData} selectedCopy={selectedCopy} setSelectedCopy={setSelectedCopy} />
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
