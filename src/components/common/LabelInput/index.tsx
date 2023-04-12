import React, { InputHTMLAttributes, useRef } from 'react';
import { SVG } from '../../../assets';
import { VALIDATE } from '../../../assets/Validate';
import HoverQuestion from '../../DetailCampaign/Analysis/HoverQuestion';
import * as S from './LabelInput.styles';

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelTitle: string;
  flexDirection?: 'row' | 'column';
  isRequire?: boolean;
  errorMessage?: string;
  confirmMessage?: string;
  limit?: number;
  desc?: string;
  hover?: string;
}

const LabelInput = ({ labelTitle, flexDirection = 'column', isRequire = true, errorMessage, desc, limit, hover, ...props }: LabelInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const textCount = inputRef.current?.value.length ?? 0;
  const inputBorderColor = errorMessage ? 'red' : undefined;
  return (
    <S.Layout flexDirection={flexDirection}>
      <S.Label>
        {labelTitle}
        {isRequire && <span>*</span>}
        {hover && <HoverQuestion text={hover} left={'-25px'} />}
      </S.Label>
      <S.Input {...props} ref={inputRef} borderColor={inputBorderColor} />
      {desc && (
        <S.Desc>
          {SVG.exclamation}
          <span>{desc}</span>
        </S.Desc>
      )}
      {limit && (
        <S.TextCount hasDesc={desc ? true : false}>
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
