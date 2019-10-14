import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyle.js";
import defaultTheme from "./themes/default.js";
import darkTheme from "./themes/dark.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About.js";
import GameSelect from "./pages/GameSelect.js";
import GameScreen from "./pages/GameScreen.js";
import NicknameInput from "./pages/NicknameInput.js";
import Profile from "./pages/Profile.js";
import Chatroom from "./pages/Chatroom.js";
import Welcome from "./pages/Welcome.js";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template: 80px 1fr / 1fr;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.main};
`;

function App() {
  const [darkmode, setDarkmode] = React.useState(false);
  const [mute, setMute] = React.useState(true);
  function toggleMode(mode) {
    if (mode === darkmode) setDarkmode(!darkmode);
    if (mode === mute) setMute(!mute);
  }
  return (
    <ThemeProvider theme={darkmode ? darkTheme : defaultTheme}>
      <Container>
        <GlobalStyles />
        <Router>
          <Route
            path="/about"
            exact
            component={props => <About {...props} />}
          />
          <Route
            path="/chatroom"
            exact
            component={props => <Chatroom {...props} />}
          />
          <Route
            path="/game"
            exact
            component={props => <GameScreen {...props} />}
          />
          <Route
            path="/select"
            exact
            component={props => <GameSelect {...props} />}
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
