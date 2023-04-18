import React from 'react';
import { SVG } from '../../../../assets';
import { SIGN } from '../../../../assets/Sign';
import useHover from '../../../../hooks/useHover';
import * as S from './HoverQuesiton.stlye';

interface HoverQuestionProps {
  text: string;
  left?: string;
  color?: 'white' | 'black';
}

const HoverQuestion = ({ text, left = '-135px', color = 'black' }: HoverQuestionProps) => {
  const [hoverRef, isHover] = useHover<HTMLDivElement>();

  return (
    <>
      <S.QuestioMark ref={hoverRef}>
        {color === 'black' ? <>{SVG.question}</> : <>{SIGN.toolTip}</>}
        <S.QuestionInfo isHover={isHover} left={left}>
          <S.QuestionText>{text}</S.QuestionText>
        </S.QuestionInfo>
      </S.QuestioMark>
    </>
  );
};

export default HoverQuestion;
