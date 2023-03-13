import { DefaultTheme } from 'styled-components';

const colors = {
  red: '#EB1F20',
  white: '#FFFFFF',
  gray10: '#f4f4f4',
  gray20: '#f9f9fa',
  gray30: '#f0f0f0',
  gray40: '#d3d3d3',
  gray50: '#333333',
  blue10: '#3f7f6ff',
  blue20: '#eeedff',
  blue30: '#5549ff',
  blue40: '#417f6',
  blue50: '#1C076D',
  black: 'black',
};

const fontSize = {
  xs: '12px',
  sm: '14px',
  default: '16px',
  lg: '22px',
  xl: '26px',
};

const button = {
  buttonS: 'width: 3.3rem; height:40px; ',
  buttonM: 'width: 7.6rem; height:40px;',
  buttonL: 'width: 13rem; height:40px;',
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
