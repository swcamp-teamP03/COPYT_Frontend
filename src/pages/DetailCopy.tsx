import React from 'react';
import styled from 'styled-components';
import PageHeader from '../components/common/PageHeader';
import CopyDetails from '../components/DetailCopy/CopyDetails';
import { Layout } from './Layout.styles';

const DetailCopy = () => {
  return (
    <Layout size="M">
      <PageHeader buttonTitle="저장" buttonSize="buttonM" onClick={() => {}}>
        카피그룹 상세
        <Date>2023/02/25</Date>
      </PageHeader>
      <GridLayout>
        <CopyDetails />
        <CopyDetails />
      </GridLayout>
    </Layout>
  );
};

export default DetailCopy;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

const Date = styled.span`
  font-size: 16px;
  color: #777777;
  margin-left: 12px;
`;
