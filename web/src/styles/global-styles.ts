import { createGlobalStyle, css } from 'styled-components';

export const head1Style = css`
  font-size: 24px;
  font-weight: 600; /* semibold */
`;

export const head2Style = css`
  font-size: 20px;
  font-weight: 600; /* semibold */
`;

export const head3Style = css`
  font-size: 18px;
  font-weight: 600; /* semibold */
`;

export const head4Style = css`
  font-size: 16px;
  font-weight: 600; /* semibold */
`;

export const body1Style = css`
  font-size: 16px;
  font-weight: 500; /* medium */
`;

export const body2Style = css`
  font-size: 16px;
  font-weight: 500; /* regular */
`;

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
  
    .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  html,
  body {
    height: 100%;
    /* max-width: 390px; */
    /* display: flex;
    justify-content: center; */
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


  .head1{
    ${head1Style}
  }
   .head2{
    ${head2Style}
  }
   .head3{
    ${head3Style}
  }
   .head4{
    ${head4Style}
  }

  .body1 {
    ${body3Style}
  }
  .body2 {
    ${body3Style}
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
