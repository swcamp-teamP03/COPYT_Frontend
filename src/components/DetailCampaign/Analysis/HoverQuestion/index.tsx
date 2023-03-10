import React from 'react';
import { SVG } from '../../../../assets';
import useHover from '../../../../hooks/useHover';
import * as S from './HoverQuesiton.stlye';

interface HoverQuestionProps {
  text: string;
}

const HoverQuestion = ({ text }: HoverQuestionProps) => {
  const [hoverRef, isHover] = useHover<HTMLDivElement>();

  return (
    <>
      <S.QuestioMark ref={hoverRef}>{SVG.question}</S.QuestioMark>
      <S.QuestionInfo isHover={isHover}>
        <S.QuestionText>{text}</S.QuestionText>
      </S.QuestionInfo>
    </>
  );
};

export default HoverQuestion;
