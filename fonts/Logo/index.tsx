import { createGlobalStyle } from 'styled-components';

export const Logo = createGlobalStyle`
  @font-face {
    font-family: 'Logo';
    src: url('./logo.eot?9iyjm2');
    src: url('./logo.eot?9iyjm2#iefix') format('embedded-opentype'), url('./logo.ttf?9iyjm2') format('truetype'),
      url('./logo.woff?9iyjm2') format('woff'), url('./logo.svg?9iyjm2#logo') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`;
