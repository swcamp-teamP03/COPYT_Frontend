import styled from 'styled-components';

export const QuestioMark = styled.div`
  position: relative;
  cursor: pointer;
  top: 3px;
  width: 20px;
  height: 20px;
`;

interface QuestionInfoProps {
  isHover: boolean;
  left: string;
}

export const QuestionInfo = styled.div<QuestionInfoProps>`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  display: ${(props) => (props.isHover ? 'block' : 'none')};
  position: absolute;
  width: fit-content;
  height: fit-content;
  left: ${(props) => props.left};
  bottom: 25px;
  color: black;
  z-index: 1000;
`;

export const QuestionText = styled.div`
  padding: 20px;
  width: 100%;
  white-space: pre;
  line-height: 23px;
  font-size: 14px;
`;
