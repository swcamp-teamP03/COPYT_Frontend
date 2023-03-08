import React, { Dispatch } from 'react';
import { useRecoilState } from 'recoil';
import { campaignConditionState } from '../../../store/campaignConditionState';
import SelectCopy from './SelectCopy';
import BudgetSetting from './BudgetSetting';
import CustomerSetting from './CustomerSetting';
import MessageSetting from './MessageSetting';
import SentSetting from './SentSetting';
import * as S from './CreateCampaignCondition.styles';

const CreateCampaignCondition = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);

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
