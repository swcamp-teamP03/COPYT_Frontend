import React from 'react';
import BudgetSetting from '../BudgetSetting';
import CustomerSetting from '../CustomerSetting';
import MessageSetting from '../MessageSetting';
import SentSetting from '../SentSetting';
import * as S from './Condition.styles';

const Condition = () => {
  return (
    <S.Layout>
      <CustomerSetting />
      <MessageSetting />
      <SentSetting />
      <BudgetSetting />
    </S.Layout>
  );
};

export default Condition;
