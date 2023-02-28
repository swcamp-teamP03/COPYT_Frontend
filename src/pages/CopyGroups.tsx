import React from 'react';
import PageHeader from '../components/common/PageHeader';
import NonCopyGroupList from '../components/CopyGroups/NonCopyGroupList';
import { Layout } from './Layout.styles';

const CopyGroups = () => {
  return (
    <Layout size="S">
      <PageHeader title="카피그룹 리스트" buttonTitle="카피 추천 받기" buttonSize="buttonL" onClick={() => {}} />
      <NonCopyGroupList />
    </Layout>
  );
};

export default CopyGroups;
