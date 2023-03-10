import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { campaignConditionState } from '../../../../store/campaignConditionState';
import CollapseContainer from '../../../common/CollapseContainer';
import * as S from './SentSetting.styles';
import dayjs from 'dayjs';
import 'react-datepicker/dist/react-datepicker.css';

const SENT_CYCLE = [{ title: '일회성 발송', desc: '지정된 시간에 일회성으로 발송합니다.' }];

const today = new Date(new Date().setHours(8, 0));
const tommrrow = new Date(today.setDate(today.getDate() + 1));
const SentSetting = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [open, setOpen] = useState(true);
  const [startDate, setStartDate] = useState(tommrrow);

  const handleCollapsed = () => {
    setOpen((prev) => !prev);
  };

  const onChangeSentCycle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCondition((prev) => ({
      ...prev,
      sent_cycle: event.target.value,
    }));
  };

  useEffect(() => {
    const time = dayjs(startDate).format('YYYY-MM-DDThh:mm:ss');
    setCondition((prev) => ({
      ...prev,
      sentTime: time,
    }));
  }, [startDate]);

  return (
    <CollapseContainer open={open} handleCollapsed={handleCollapsed} numbering={3} title="발송 설정">
      <S.Title>
        발송 타이밍 설정
        <span>*</span>
      </S.Title>
      {SENT_CYCLE.map((cycle) => (
        <S.RadioInput key={cycle.title}>
          <input type="radio" name="sent_time" value={cycle.title} onChange={onChangeSentCycle} checked={condition.sentCycle === cycle.title} />
          <label>{cycle.title}</label>
          <span>{cycle.desc}</span>
        </S.RadioInput>
      ))}
      <S.FlexBox>
        <S.Title>발송 일정</S.Title>
        <S.TimeWrapper>
          <S.SDatePicker
            selected={startDate}
            minDate={startDate}
            onChange={(date: Date) => setStartDate(date)}
            showTimeSelect
            dateFormat="yyyy-MM-dd h:mm aa"
            timeIntervals={30}
            maxTime={new Date(1678275045880)}
            minTime={new Date(1678230617087)}
          ></S.SDatePicker>
        </S.TimeWrapper>
      </S.FlexBox>
    </CollapseContainer>
  );
};

export default SentSetting;
