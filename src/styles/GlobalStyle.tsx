import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,body,#root{
line-height:29px;
 @font-face {
  font-family: 'Pretendard';
  src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
 }

 font-family: 'Pretendard';
}
`;

export default GlobalStyle;
