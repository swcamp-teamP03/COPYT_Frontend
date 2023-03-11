import React, { useState, useEffect } from 'react';
import { CLIENT_SVG } from '../../../assets';
import * as S from './Group';
import { ClientGroup } from '../../../types/client';

const Group = ({ clientList }: { clientList: ClientGroup[] }) => {
  return (
    <div>
      {' '}
      <S.ListContainer>
        {clientList.map((list) => (
          <S.GroupList key={list.customerGroupId}>
            <span>{list.favorite ? CLIENT_SVG.star : CLIENT_SVG.unStar}</span>
            <span>{list.date}</span>
            <span>{list.groupName}</span>
            <span>{list.customerCnt}</span>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </div>
  );
};

export default Group;
