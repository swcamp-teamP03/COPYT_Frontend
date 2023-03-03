import React, { InputHTMLAttributes } from 'react';
import * as S from './LabelInput.styles';

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelTitle: string;
  flexDirection?: 'row' | 'column';
  isRequire?: boolean;
  errorMessage?: string;
}

const LabelInput = ({ labelTitle, flexDirection = 'column', isRequire = true, errorMessage, ...props }: LabelInputProps) => {
  return (
    <S.Layout flexDirection={flexDirection}>
      <S.Label>
        {labelTitle}
        {isRequire && <span>*</span>}
      </S.Label>
      <S.Input {...props} />
      {errorMessage && <S.ErrorMessage>* {errorMessage}</S.ErrorMessage>}
    </S.Layout>
  );
};

export default LabelInput;
