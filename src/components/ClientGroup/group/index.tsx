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

  const handleFavorite = (id: number, favorite: boolean) => {
    clientLikeMutate({ id, favorite });
  };

  return (
    <>
      <S.ListContainer>
        {clientList.map((list) => (
          <S.GroupList key={list.customerGroupId}>
            <div onClick={() => handleFavorite(list.customerGroupId, list.favorite)}>{list.favorite ? FAVORITES.checked : FAVORITES.unChecked}</div>
            <div>{list.date}</div>
            <div onClick={() => onClick(list.customerGroupId)}>{list.groupName}</div>
            <div>{list.customerCnt}</div>
          </S.GroupList>
        ))}
      </S.ListContainer>
    </>
  );
};

export default Group;
