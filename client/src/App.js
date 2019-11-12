import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyle";
import colorTheme from "./themes/color";
import alternativeColorTheme from "./themes/alternativeColorTheme";
import darkTheme from "./themes/dark";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import NicknameInput from "./pages/NicknameInput";
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import { getItem, setItem } from "./ressources/scripts/storage";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template: 100px 1fr / 1fr;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.main};
`;

function App() {
  const [settings, adjustSettings] = React.useState({
    darkmode: false || getItem("darkmode"),
    colors: true || getItem("colors")
  });

  function setSettings(name) {
    const newSettings = { ...settings };
    newSettings[name] = !settings[name];
    setItem(name, newSettings[name]);
    adjustSettings(newSettings);
  }

  const colors = settings.colors ? colorTheme : alternativeColorTheme;

  return (
    <ThemeProvider theme={settings.darkmode ? darkTheme : colors}>
      <GlobalStyles />
      <Container>
        <Router>
          <Route
            path="/about"
            exact
            component={props => <About {...props} />}
          />
          <Route
            path="/main"
            component={() => (
              <Main setSettings={setSettings} settings={settings} />
            )}
          />
          <Route
            path="/entername"
            exact
            component={props => <NicknameInput {...props} />}
          />
          <Route
            path="/profile"
            exact
            component={props => <Profile {...props} />}
          />
          <Route path="/" exact component={props => <Welcome {...props} />} />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
