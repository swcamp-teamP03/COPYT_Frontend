import React from 'react';
import { useRecoilValue } from 'recoil';
import { campaignConditionState } from '../../../store/campaignConditionState';
import * as S from './MessageList.stlyes';

const MessageList = () => {
  const condition = useRecoilValue(campaignConditionState);

  const memberA = condition.abTest ? Math.floor(condition.customerCnt / 2) : condition.customerCnt;
  const memberB = Math.ceil(condition.customerCnt / 2);

  return (
    <>
      <S.Layout>
        <S.MessageContainer>
          <S.MessageHeader>
            <span>메시지 A</span>
            <span>{memberA}명</span>
          </S.MessageHeader>
          <S.MessageBody>{condition.messageA}</S.MessageBody>
        </S.MessageContainer>
        {condition.abTest && (
          <S.MessageContainer>
            <S.MessageHeader>
              <span>메시지 B</span>
              <span>{memberB}명</span>
            </S.MessageHeader>
            <S.MessageBody>{condition.messageB}</S.MessageBody>
          </S.MessageContainer>
        )}
      </S.Layout>
    </>
  );
};

export default MessageList;
