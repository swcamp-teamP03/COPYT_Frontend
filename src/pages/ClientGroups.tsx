import React from 'react';
import styled from 'styled-components';
import ClientGroupList from '../components/ClientGrups';

const ClientGroups = () => {
  return (
    <>
      <ClientGroupList totalCopy={10} copyList={[{ copyId: 1, createDate: '2023-03-02', like: false, copyName: 'example', tag: 'example' }]} />
    </>
  );
};

export default ClientGroups;
