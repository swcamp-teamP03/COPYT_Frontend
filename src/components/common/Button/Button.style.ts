import styled from 'styled-components';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  width: ${({ width }) => width ?? '160px'};
  height: ${({ height }) => height ?? '50px'};
  border-radius: 10px;
  text-align: center;
  font-size: ${({ fontSize }) => fontSize ?? 'medium'};
  color: ${({ color, theme }) => color ?? theme.colors.white};
  background-color: ${({ backgroundColor, theme }) => backgroundColor ?? theme.colors.black};
`;
