import React from 'react';
import { SIGN } from '../../../../assets/Sign';
import useHover from '../../../../hooks/useHover';
import * as S from './WhiteHoverQuestion';

interface WhiteHoverQuestionProps {
  text: string;
}

const WhiteHoverQuestion = ({ text }: WhiteHoverQuestionProps) => {
  const [hoverRef, isHover] = useHover<HTMLDivElement>();

  return (
    <>
      <S.QuestioMark ref={hoverRef}>{SIGN.toolTip}</S.QuestioMark>
      <S.QuestionInfo isHover={isHover}>
        <S.QuestionText>{text}</S.QuestionText>
      </S.QuestionInfo>
    </>
  );
};

export default WhiteHoverQuestion;
