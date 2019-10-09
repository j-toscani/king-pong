import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyle.js";
import defaultTheme from "./themes/default.js";
import darkTheme from "./themes/dark.js";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template: 80px 1fr / 1fr;
  background: ${props => props.theme.main};
`;

const ButtonStyled = styled.button`
  background: ${props => props.theme.accent};
`;

function App() {
  const [darkmode, setDarkmode] = React.useState(false);
  function toggleMode() {
    setDarkmode(!darkmode);
  }
  return (
    <ThemeProvider theme={darkmode ? darkTheme : defaultTheme}>
      <Container>
        <GlobalStyles />
        <header>Hello, this is header speaking...</header>
        <div>Hello, this is app Speaking...</div>
        <footer>Hello this is footer speaking...</footer>
        <ButtonStyled onClick={toggleMode}>Switch Mode</ButtonStyled>
      </Container>
    </ThemeProvider>
  );
}

export default App;
