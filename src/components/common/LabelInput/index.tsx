import React, { InputHTMLAttributes, useRef } from 'react';
import { SVG } from '../../../assets';
import { VALIDATE } from '../../../assets/Validate';
import HoverQuestion from '../../DetailCampaign/Analysis/HoverQuestion';
import * as S from './LabelInput.styles';

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelTitle?: string;
  flexDirection?: 'row' | 'column';
  isRequire?: boolean;
  errorMessage?: string;
  confirmMessage?: string;
  limit?: number;
  desc?: string;
  hover?: string;
  marginBottom?: string;
  value?: string;
  labelFontSize?: string;
  labelFontWeight?: string;
}

const LabelInput = ({
  labelTitle,
  flexDirection = 'column',
  isRequire = true,
  errorMessage,
  desc,
  limit,
  hover,
  marginBottom = '20px',
  labelFontSize = '16px',
  labelFontWeight = 'normal',
  value,
  ...props
}: LabelInputProps) => {
  const textCount = value?.length ?? 0;
  const inputBorderColor = errorMessage ? 'red' : undefined;

  return (
    <S.Layout flexDirection={flexDirection} marginBottom={marginBottom}>
      <S.Label labelFontSize={labelFontSize} labelFontWeight={labelFontWeight}>
        {labelTitle}
        {isRequire && <span>*</span>}
        {hover && <HoverQuestion text={hover} />}
      </S.Label>
      <S.Input {...props} value={value} borderColor={inputBorderColor} />
      {desc && (
        <S.Desc>
          <div>{SVG.exclamation}</div>
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
