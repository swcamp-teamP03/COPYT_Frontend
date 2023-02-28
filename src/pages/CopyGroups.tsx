import React, { useState } from 'react';
import Modal from '../components/common/Modal';
import PageHeader from '../components/common/PageHeader';
import { Layout } from './Layout.styles';

const CopyGroups = () => {
  return (
    <Layout size="S">
      <PageHeader title="hello" buttonTitle="수정" buttonColor="disabled" />
    </Layout>
  );
};

export default CopyGroups;
