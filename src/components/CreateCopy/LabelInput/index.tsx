import React, { Dispatch, Key } from 'react';
import { ConditionAction, InitialState } from '../CreateCondition';
import * as S from './LabelInput.styles';

interface LabelInputProps {
  title: string;
  limit: number;
  labelKey: 'copyGroupName' | 'tag' | 'brandName' | 'sector' | 'productName' | 'keyword';
  dispatch: Dispatch<ConditionAction>;
  condition: InitialState;
  placeHolder?: string;
}

const LabelInput = ({ title, limit, labelKey, dispatch, condition, placeHolder }: LabelInputProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.substring(0, limit);
    dispatch({ type: 'CHANGE_INPUT', key: labelKey, value });
  };

  return (
    <S.Layout>
      <S.Label htmlFor={labelKey}>
        {title} <span>*</span>
      </S.Label>
      <S.Input id={labelKey} onChange={(e) => handleInput(e)} value={condition[`${labelKey}`]} placeholder={placeHolder} />
      <S.TextCount>
        {condition[`${labelKey}`].length}/{limit}
      </S.TextCount>
    </S.Layout>
  );
};

export default LabelInput;
