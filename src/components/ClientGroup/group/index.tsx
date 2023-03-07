import React, { useState, useEffect } from 'react';
import { CLIENT_SVG } from '../../../assets';
import { ClientGroup } from '../../../api/Auth/client/group';
import * as S from './ClientGroup';

interface ClientGroupListProps {
  clientList: ClientGroup[];
}

const Group = ({ clientList }: ClientGroupListProps) => {
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
