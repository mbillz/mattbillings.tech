import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { fontFamilies, colors, viewports } from '../../utils/variables';
import * as fonts from '../../fonts';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
  }

  @font-face {
    font-family: 'ITC Avant Garde';
    src: url(${fonts.ITCAvantGardeProBoldWoff2}) format('woff2'),
      url(${fonts.ITCAvantGardeProBoldWoff}) format('woff');
    font-weight: 700;
  }
  
  @font-face {
    font-family: 'ITC Avant Garde';
    src: url(${fonts.ITCAvantGardeProDemiWoff2}) format('woff2'),
      url(${fonts.ITCAvantGardeProDemiWoff}) format('woff');
    font-weight: 600;
  }
  
  @font-face {
    font-family: 'ITC Avant Garde';
    src: url(${fonts.ITCAvantGardeProMdWoff2}) format('woff2'),
      url(${fonts.ITCAvantGardeProMdWoff}) format('woff');
    font-weight: 500;
  }
  
  @font-face {
    font-family: 'ITC Avant Garde';
    src: url(${fonts.ITCAvantGardeProBkWoff2}) format('woff2'),
    url(${fonts.ITCAvantGardeProBkWoff}) format('woff');
    font-weight: 400;
  }
  
  @font-face {
    font-family: 'ITC Avant Garde';
    src: url(${fonts.ITCAvantGardeProBkOblWoff2}) format('woff2'),
      url(${fonts.ITCAvantGardeProBkOblWoff}) format('woff');
    font-style: italic;
    font-weight: 400;
  }
  
  html {
    box-sizing: border-box;
    font-family: ${fontFamilies.regular};
    font-size: 12px;

    @media ${viewports.medium} {
      font-size: 16px;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: ${colors.contentBlack};
  }
`;

export default GlobalStyle;
