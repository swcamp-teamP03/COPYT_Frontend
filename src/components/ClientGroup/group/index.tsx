import React from 'react';
import * as S from './Group';
import { ClientGroup } from '../../../types/client';
import useClientLikeMutation from '../../../quries/Client/useClientLikeMutation';
import { FAVORITES } from '../../../assets/Like';

interface GroupListProps {
  clientList: ClientGroup[];
  onClick: (id: number) => void;
}

const Group = ({ clientList, onClick }: GroupListProps) => {
  const { mutate: clientLikeMutate } = useClientLikeMutation();

  const handleParams = (id: number) => {
    clientLikeMutate(id);
  };

  return (
    <div>
      <S.ListContainer>
        {clientList.map((list) => (
          <S.GroupList key={list.customerGroupId}>
            <span onClick={() => handleParams}>{list.favorite ? FAVORITES.checked : FAVORITES.unChecked}</span>
            <span>{list.date}</span>
            <span onClick={() => onClick(list.customerGroupId)}>{list.groupName}</span>
            <span>{list.customerCnt}</span>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </div>
  );
};

export default Group;
