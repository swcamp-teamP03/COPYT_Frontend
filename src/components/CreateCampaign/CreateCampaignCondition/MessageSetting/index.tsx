import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { SVG } from '../../../../assets';
import { campaignConditionState } from '../../../../store/campaignConditionState';
import CollapseContainer from '../../../common/CollapseContainer';
import * as S from './MessageSetting.styles';

const MESSAGE_TYPE = [
  { title: 'SMS', desc: '내용 140byte 이하(한글 기준 70자)* 링크 포함기준' },
  { title: 'LMS', desc: '내용 2,000byte 이하, 제목 40byte 이하(한글 기준 1,000자)* 링크 포함기준' },
];

const SENT_TYPE = [
  { title: '정보성 문자', desc: '전송자 명칭 및 연락처 포함', type: 'COMM' },
  { title: '광고성 문자', desc: '(광고) 접두어, 수신 거부 링크, 전송자 명칭 및 연락처 포함', type: 'AD' },
];

const MessageSetting = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);

  const onChangeMessageType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value === 'SMS' ? 'SMS' : 'LMS';
    setCondition((prev) => ({
      ...prev,
      messageType: result,
    }));
  };
  const onChangesendType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value === '정보성 문자' ? 'COMM' : 'AD';
    setCondition((prev) => ({
      ...prev,
      sendType: result,
    }));
  };

  return (
    <>
      <S.Gap>
        <div>
          <S.Title>
            메시지 유형
            <span>*</span>
          </S.Title>
          {MESSAGE_TYPE.map((type) => (
            <S.RadioInput key={type.title}>
              <input type="radio" name="message_type" value={type.title} onChange={onChangeMessageType} checked={condition.messageType === type.title} />
              <label>{type.title}</label>
              <span>{type.desc}</span>
            </S.RadioInput>
          ))}
        </div>
        <div>
          <S.Title>
            발신 유형
            <span>*</span>
          </S.Title>
          {SENT_TYPE.map((type) => (
            <S.RadioInput key={type.title}>
              <input type="radio" name="sent_type" value={type.title} onChange={onChangesendType} checked={condition.sendType === type.type} />
              <label>{type.title}</label>
              <span>{type.desc}</span>
            </S.RadioInput>
          ))}
          <S.Desc>
            <div>{SVG.exclamation}</div>
            <span>광고성 내용이 포함되어 있으면 꼭 체크해 주세요. 정책 위반 시 책임은 고객사 당사에 있으니 주의해주세요.자세한 사례는 가이드문서를 확인해주세요.</span>
          </S.Desc>
        </div>
      </S.Gap>
    </>
  );
};

export default MessageSetting;
