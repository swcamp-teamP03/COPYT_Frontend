import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

import * as S from './Button.style';

export interface ButtonProps {
  children: ReactNode;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  border?: CSSProperties['border'];
}

const Button = ({ children, width, ...props }: ButtonProps) => {
  return <S.Button {...props}>{children} </S.Button>;
};

export default Button;
