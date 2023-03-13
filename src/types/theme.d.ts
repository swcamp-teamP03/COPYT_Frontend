import 'styled-components';
import { ButtonsType, ColorsType, FontsType } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    fontSize: FontsType;
    button: ButtonsType;
  }
}
