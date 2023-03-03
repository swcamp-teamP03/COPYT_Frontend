import React, { InputHTMLAttributes } from 'react';
import * as S from './LabelInput.styles';

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelTitle: string;
  flexDirection?: 'row' | 'column';
  isRequire?: boolean;
}

const LabelInput = ({ labelTitle, flexDirection = 'column', isRequire = true, ...props }: LabelInputProps) => {
  return (
    <S.Layout flexDirection={flexDirection}>
      <S.Label>
        {labelTitle}
        {isRequire && <span>*</span>}
      </S.Label>
      <S.Input {...props} />
    </S.Layout>
  );
};

export default LabelInput;
