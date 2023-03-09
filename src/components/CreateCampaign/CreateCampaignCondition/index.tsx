import React from 'react';
import SelectCopy from './SelectCopy';
import BudgetSetting from './BudgetSetting';
import CustomerSetting from './CustomerSetting';
import MessageSetting from './MessageSetting';
import SentSetting from './SentSetting';
import * as S from './CreateCampaignCondition.styles';

const CreateCampaignCondition = () => {
  return (
    <S.Layout>
      <CustomerSetting />
      <MessageSetting />
      <SelectCopy />
      <SentSetting />
      <BudgetSetting />
    </S.Layout>
  );
};

export default CreateCampaignCondition;
