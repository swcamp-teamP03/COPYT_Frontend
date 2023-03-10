import React from 'react';
import SelectCopy from './SelectCopy';
import BudgetSetting from './BudgetSetting';
import CustomerSetting from './CustomerSetting';
import MessageSetting from './MessageSetting';
import SentSetting from './SentSetting';
import * as S from './CreateCampaignCondition.styles';
import WithCollapse from '../../common/WithCollapse';

const CreateCampaignCondition = () => {
  return (
    <S.Layout>
      <WithCollapse title="타겟 고객 설정" numbering={1}>
        <CustomerSetting />
      </WithCollapse>
      <WithCollapse title="메시지 설정" numbering={2}>
        <MessageSetting />
      </WithCollapse>
      <SelectCopy />
      <WithCollapse title="발송 설정" numbering={3}>
        <SentSetting />
      </WithCollapse>
      <BudgetSetting />
    </S.Layout>
  );
};

export default CreateCampaignCondition;
