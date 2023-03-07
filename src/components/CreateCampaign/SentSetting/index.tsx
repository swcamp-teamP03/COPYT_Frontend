import React, { useState } from 'react';
import CollapseContainer from '../../common/CollapseContainer';
import * as S from './SentSetting.styles';

const SENT_TIME = [{ title: '일회성 발송', desc: '지정된 시간에 일회성으로 발송합니다.' }];

const SentSetting = () => {
  const [open, setOpen] = useState(true);

  const handleCollapsed = () => {
    setOpen((prev) => !prev);
  };

  return (
    <CollapseContainer open={open} handleCollapsed={handleCollapsed} numbering={3} title="발송 설정">
      <S.Title>
        발송 타이밍 설정
        <span>*</span>
      </S.Title>
      {SENT_TIME.map((time) => (
        <S.RadioInput key={time.title}>
          <input type="radio" name="sent_time" value={time.title} />
          <label>{time.title}</label>
          <span>{time.desc}</span>
        </S.RadioInput>
      ))}
      <S.FlexBox>
        <S.Title>발송 일정</S.Title>
        <S.CalendarWrapper>
          <div>2023-01-01</div>
          <div>달력</div>
        </S.CalendarWrapper>
        <S.TimeWrapper>13:00</S.TimeWrapper>
      </S.FlexBox>
    </CollapseContainer>
  );
};

export default SentSetting;
