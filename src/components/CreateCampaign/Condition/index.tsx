import React from 'react';
import CustomerSetting from '../CustomerSetting';
import MessageSetting from '../MessageSetting';
import * as S from './Condition.styles';

const Condition = () => {
  return (
    <S.Layout>
      <CustomerSetting />
      <MessageSetting />
    </S.Layout>
  );
};

export default Condition;
