import { createGlobalStyle, css } from 'styled-components';

export const body3Style = css`
  font-size: 14px;
  font-weight: 600; /* semibold */
`;

export const body4Style = css`
  font-size: 14px;
  font-weight: 400; /* regular */
`;

export const body5Style = css`
  font-size: 12px;
  font-weight: 600; /* semibold */
`;

export const body6Style = css`
  font-size: 12px;
  font-weight: 400; /* regular */
`;

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    font-family: 'Pretendard', sans-serif;
  }
  
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  
  #root,
  #__next {
    isolation: isolate;
  }

  /* 추가적인 스타일 설정 */
  h1 {
    font-size: 24px;
    font-weight: 600; /* semibold */
  }
  h2 {
    font-size: 20px;
    font-weight: 600; /* semibold */
  }
  h3 {
    font-size: 18px;
    font-weight: 600; /* semibold */
  }
  h4 {
    font-size: 16px;
    font-weight: 600; /* semibold */
  }
  p, h5 {
    font-size: 16px;
    font-weight: 500; /* medium */
  }
  h6, span {
    font-size: 16px;
    font-weight: 400; /* regular */
  }
  .body3 {
    ${body3Style}
  }
  .body4 {
    ${body4Style}
  }
  .body5 {
    ${body5Style}
  }
  .body6 {
    ${body6Style}
  }
`;

export default GlobalStyles;
