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

export type ColorsType = typeof colors;

const theme: DefaultTheme = {
  colors,
};

export default theme;
