import React from 'react';
import { CLIENT_SVG } from '../../../assets';
import * as S from './Group';
import { ClientGroup } from '../../../types/client';

interface GroupListProps {
  clientList: ClientGroup[];
  onClick: (id: number) => void;
}

const Group = ({ clientList, onClick }: GroupListProps) => {
  return (
    <div>
      {' '}
      <S.ListContainer>
        {clientList.map((list) => (
          <S.GroupList key={list.customerGroupId}>
            <span>{list.favorite ? CLIENT_SVG.star : CLIENT_SVG.unStar}</span>
            <span>{list.date}</span>
            <span>{list.groupName}</span>
            <span onClick={() => onClick(list.customerGroupId)}>{list.customerCnt}</span>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </div>
  );
};

export default Group;
