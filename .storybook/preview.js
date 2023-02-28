import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../src/styles/GlobalStyles";
import { theme } from '@theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on.*' }
}