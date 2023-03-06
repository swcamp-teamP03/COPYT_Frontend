import React from 'react';
import styled from 'styled-components';
import ClientGroupList from '../components/ClientGroup/list';

const ClientGroups = () => {
  const totalGroup = 100; // 임의의 값으로 설정
  const groupList = [
    //  임의의 값으로 설정
    {
      customerGroupId: 1,
      groupName: '첫구매 고객 별점',
      customerCnt: 3000,
      favorite: false,
      csvUploadCheck: true,
      date: '2023/02/24',
    },
    {
      customerGroupId: 2,
      groupName: '첫구매 고객 별점2',
      customerCnt: 5000,
      favorite: true,
      csvUploadCheck: false,
      date: '2023/02/22',
    },
  ];

  return <div>{<ClientGroupList totalGroup={totalGroup} groupList={groupList} />}</div>;
};

export default ClientGroups;
