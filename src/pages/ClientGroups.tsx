import React from 'react';
import styled from 'styled-components';
// import ClientGroupList from '../components/ClientGrups';

const ClientGroups = () => {
  const totalClient = 100; // 임의의 값으로 설정
  const clientList = [
    //  임의의 값으로 설정
    { clientId: 1, createDate: '2022-03-01', like: true, copyName: 'Copy1', tag: 'Tag1' },
    { clientId: 2, createDate: '2022-03-02', like: false, copyName: 'Copy2', tag: 'Tag2' },
    { clientId: 3, createDate: '2022-03-03', like: true, copyName: 'Copy3', tag: 'Tag3' },
  ];

  return <div>{/* <ClientGroupList totalCopy={totalCopy} copyList={copyList} /> */}</div>;
};

export default ClientGroups;
