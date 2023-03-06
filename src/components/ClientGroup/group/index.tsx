import React, { useState, useEffect } from 'react';
import { CLIENT_SVG } from '../../../assets';
import * as S from './ClientGroup';

const ClientGroup = () => {
  return (
    <div>
      {' '}
      <S.ListContainer>
        {/* {groupList.map((list) => (
          <S.GroupList key={list.customerGroupId}>
            <span>{list.favorite ? CLIENT_SVG.star : CLIENT_SVG.unStar}</span>
            <span>{list.date}</span>
            <span>{list.groupName}</span>
            <span>{list.customerCnt}</span>
          </S.GroupList>
        ))} */}
      </S.ListContainer>
    </div>
  );
};

export default ClientGroup;
