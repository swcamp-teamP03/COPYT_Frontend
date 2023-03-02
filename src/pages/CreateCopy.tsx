import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { Layout } from './Layout.styles';
import styled from 'styled-components';
import CreateCondition from '../components/CreateCopy/CreateCondition';

const CreateCopy = () => {
  return (
    <>
      <Layout size="M">
        <PageHeader title="카피 추천 받기" buttonTitle="저장" buttonSize="buttonM" onClick={() => {}} />
        <GridLayout>
          <CreateCondition />
          <div>hi2</div>
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
