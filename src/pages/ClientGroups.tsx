import React from 'react';
import ClientGroupList from '../components/ClientGroup/list';
import PageHeader from '../components/common/PageHeader';
import { useNavigate } from 'react-router-dom';

const ClientGroups = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        buttonTitle="고객 그룹 작성"
        buttonSize="buttonL"
        onClick={() => {
          navigate('/clients/create');
        }}
      >
        {' '}
        고객 그룹 리스트
      </PageHeader>

      <ClientGroupList />
    </>
  );
};

export default ClientGroups;
