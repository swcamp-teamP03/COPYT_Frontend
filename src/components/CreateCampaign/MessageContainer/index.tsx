import React from 'react';
import { useRecoilState } from 'recoil';
import { SVG } from '../../../assets';
import { campaignConditionState } from '../../../store/campaignConditionState';
import * as S from './MessageContainer.styles';

const MessageContainer = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);

  const deleteCopyMessages = (target: 'A' | 'B') => {
    if (target === 'A') {
      setCondition((prev) => ({
        ...prev,
        messageA: '',
      }));
    } else {
      setCondition((prev) => ({
        ...prev,
        messageB: '',
      }));
    }
  };

  return (
    <>
      <S.FlexBox>
        <S.Label>메시지 A</S.Label>
        <S.MessageContainer hasMessage={condition.messageA ? true : false}>
          {condition.messageA ? (
            <>
              <span>{condition.messageA}</span>
              <S.CloseButton onClick={() => deleteCopyMessages('A')}>{SVG.closeButton}</S.CloseButton>
            </>
          ) : (
            <span>아직 등록된 카피 메세지가 없습니다.</span>
          )}
        </S.MessageContainer>
      </S.FlexBox>
      {condition.abTest && (
        <S.FlexBox>
          <S.Label>메시지 B</S.Label>
          <S.MessageContainer hasMessage={condition.messageB ? true : false}>
            {condition.messageB ? (
              <>
                <span>{condition.messageB}</span>
                <S.CloseButton onClick={() => deleteCopyMessages('B')}>{SVG.closeButton}</S.CloseButton>
              </>
            ) : (
              <span>아직 등록된 카피 메세지가 없습니다.</span>
            )}
          </S.MessageContainer>
        </S.FlexBox>
      )}
    </>
  );
};

export default MessageContainer;
