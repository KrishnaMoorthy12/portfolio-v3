import { createGlobalStyle } from 'styled-components';

export const JetBrainsMono = createGlobalStyle`
  @font-face {
    font-family: 'JetBrains Mono';
    font-display: swap;
    src: url('./JetBrainsMono-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-display: swap;
    src: url('./JetBrainsMono-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-display: swap;
    src: url('./JetBrainsMono-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }
`;
