import React, { InputHTMLAttributes } from 'react';
import * as S from './LabelInput.styles';

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelTitle: string;
}

const LabelInput = ({ labelTitle, ...props }: LabelInputProps) => {
  return (
    <>
      <S.Label>{labelTitle}</S.Label>
      <S.Input {...props} />
    </>
  );
};

export default LabelInput;
