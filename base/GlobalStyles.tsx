import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;

  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(${props => props.theme.colors.primary.dark}, 0.05);
}

html {
  font-size: 62.5%;
  font-family: $font-default;
  scroll-behavior: smooth;
  // overflow: overlay;
}

body {
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: $color-white;
  color: $color-slate-dark-4;

  @include theme(dark) {
    background-color: $color-slate-dark-5;
    color: $color-slate-light-1;
  }
}

::selection {
  background-color: $color-primary-dark;
  color: $color-white;

  @include theme(dark) {
    background-color: $color-primary-main;
  }
}

::-webkit-scrollbar {
  width: 0.8rem;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba($color-primary-dark, 0.75);
  opacity: 0.5;
  border-radius: 1rem;
  transition: all 0.2s;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba($color-primary-dark, 1);
  opacity: 1;
}
`;
