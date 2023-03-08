import React from 'react';
import { useRecoilState } from 'recoil';
import { SVG } from '../../../assets';
import { campaignConditionState } from '../../../store/campaignConditionState';
import * as S from './MessageContainer.styles';

const MessageContainer = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);

  const deleteCopyMessages = (target: 'A' | 'B') => {
    setCondition((prev) => ({
      ...prev,
      messages: { ...condition.messages, [`${target}`]: '' },
    }));
  };

  return (
    <>
      <S.FlexBox>
        <S.Label>메시지 A</S.Label>
        <S.MessageContainer hasMessage={condition.messages.A ? true : false}>
          {condition.messages.A ? (
            <>
              <span>{condition.messages.A}</span>
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
          <S.MessageContainer hasMessage={condition.messages.B ? true : false}>
            {condition.messages.B ? (
              <>
                <span>{condition.messages.B}</span>
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
