import { DefaultTheme } from 'styled-components';

const colors = {
  red: '#EB1F2',
  white: '#FFFFFF',
  black: '#232323',
  gray0: '#F5F5F5',
  gray10: '#C7C7C7',
  gray20: '#B7B7B7',
  gray30: '#DFDFDF',
  gray40: '#D0D0D0',
  gray50: '#B8B8B8',
  gray60: '#B7B7B7',
  gray70: '#5F5F5F',
  gray80: '#555555',
  gray90: '#424242',
};

const fontSize = {
  xs: '12px',
  sm: '14px',
  default: '16px',
  lg: '22px',
  xl: '26px',
};

const button = {
  buttonS: 'width: 60px; height:40px; border-radius: 6px;',
  buttonM: 'width: 80px; height:40px; border-radius: 6px;',
  buttonL: 'width: 110px; height:40px; border-radius: 6px;',
};

export type ColorsType = typeof colors;
export type FontsType = typeof fontSize;
export type ButtonsType = typeof button;

const theme: DefaultTheme = {
  colors,
  fontSize,
  button,
};

export default theme;
