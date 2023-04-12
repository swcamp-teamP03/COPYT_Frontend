import React, { InputHTMLAttributes, useRef } from 'react';
import { VALIDATE } from '../../../assets/Validate';
import * as S from './LabelInput.styles';

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelTitle: string;
  flexDirection?: 'row' | 'column';
  isRequire?: boolean;
  errorMessage?: string;
  confirmMessage?: string;
  limit?: number;
}

const LabelInput = ({ labelTitle, flexDirection = 'column', isRequire = true, errorMessage, limit, ...props }: LabelInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const textCount = inputRef.current?.value.length ?? 0;
  const inputBorderColor = errorMessage ? 'red' : undefined;
  return (
    <S.Layout flexDirection={flexDirection}>
      <S.Label>
        {labelTitle}
        {isRequire && <span>*</span>}
      </S.Label>
      <S.Input {...props} ref={inputRef} borderColor={inputBorderColor} />
      {limit && (
        <S.TextCount>
          {textCount}/ {limit}
        </S.TextCount>
      )}
      {errorMessage ? (
        <S.ErrorMessage>
          {VALIDATE.false} {errorMessage}
        </S.ErrorMessage>
      ) : (
        <S.ConfirmMessage></S.ConfirmMessage>
      )}
    </S.Layout>
  );
};

export default LabelInput;
