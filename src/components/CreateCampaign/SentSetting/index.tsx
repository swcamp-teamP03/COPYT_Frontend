import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { campaignConditionState } from '../../../store/campaignConditionState';
import CollapseContainer from '../../common/CollapseContainer';
import * as S from './SentSetting.styles';
import 'react-datepicker/dist/react-datepicker.css';
import { SVG } from '../../../assets';

const SENT_CYCLE = [{ title: '일회성 발송', desc: '지정된 시간에 일회성으로 발송합니다.' }];

const SentSetting = () => {
  const [condition, setCondition] = useRecoilState(campaignConditionState);
  const [open, setOpen] = useState(true);
  const [startDate, setStartDate] = useState(new Date(1678249833931));

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
    //TODO : condition 변경하기
  }, [startDate]);

  return (
    <CollapseContainer open={open} handleCollapsed={handleCollapsed} numbering={3} title="발송 설정">
      <S.Title>
        발송 타이밍 설정
        <span>*</span>
      </S.Title>
      {SENT_CYCLE.map((cycle) => (
        <S.RadioInput key={cycle.title}>
          <input type="radio" name="sent_time" value={cycle.title} onChange={onChangeSentCycle} checked={condition.sent_cycle === cycle.title} />
          <label>{cycle.title}</label>
          <span>{cycle.desc}</span>
        </S.RadioInput>
      ))}
      <S.FlexBox>
        <S.Title>발송 일정</S.Title>
        <S.TimeWrapper>
          <S.SDatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            showTimeSelect
            dateFormat="yyyy-MM-dd h:mm"
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
