import styled from 'styled-components';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  width: ${({ width }) => width ?? '10rem'};
  height: ${({ height }) => height ?? '3.125rem'};
  border: ${({ border }) => border ?? 'solid 1px'};
  border-radius: 12px;
  text-align: center;
  font-size: ${({ fontSize }) => fontSize ?? 'medium'};
  color: ${({ color, theme }) => color ?? theme.colors.white};
  background-color: ${({ backgroundColor, theme }) => backgroundColor ?? theme.colors.black};

  &:hover {
    background-color: ButtonFace;
  }
`;
