import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GlobalStyle from "../src/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import defaultTheme from "../src/themes/default";

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);

const Main = styled.div`
  margin: 10px;
`;

// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <Main>
      <GlobalStyle />
      {storyFn()}
    </Main>
  </ThemeProvider>
);
addDecorator(GlobalStyleDecorator);
