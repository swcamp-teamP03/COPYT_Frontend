import React from 'react';
import { useRecoilState } from 'recoil';
import { campaignConditionState } from '../../../store/campaignConditionState';
import CampaignMessage from './CampaignMessage';
import * as S from './MessageList.stlyes';

const MessageList = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);

  const memberA = condition.abTest ? Math.floor(condition.customerCnt / 2) : condition.customerCnt;
  const memberB = Math.ceil(condition.customerCnt / 2);

  return (
    <>
      <S.Layout>
        <CampaignMessage type="A" member={memberA} initMessage={condition.messageA} />
        {condition.abTest && <CampaignMessage type="B" member={memberB} initMessage={condition.messageB} />}
      </S.Layout>
    </>
  );
};

export default MessageList;
