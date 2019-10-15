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
  /* max-width: 450px; */
  height: 100vh;
  background: ${props => props.theme.main};
`;

function App() {
  const [darkmode, setDarkmode] = React.useState(false);
  const [mute, setMute] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [nickname, setNickname] = React.useState("");

  function handleToggleMode(mode) {
    if (mode === "darkmode") setDarkmode(!darkmode);
    if (mode === "mute") setMute(!mute);
    if (mode === "open") setOpen(!open);
  }
  return (
    <ThemeProvider theme={darkmode ? darkTheme : defaultTheme}>
      <GlobalStyles />
      <Container>
        <Router>
          <Route
            path="/about"
            exact
            component={props => <About {...props} />}
          />
          <Route
            path="/chatroom"
            exact
            component={props => (
              <Chatroom
                nickname={nickname}
                handleToggleMode={handleToggleMode}
                darkmode={darkmode}
                mute={mute}
                open={open}
                {...props}
              />
            )}
          />
          <Route
            path="/game"
            exact
            component={props => <GameScreen {...props} />}
          />
          <Route
            path="/select"
            exact
            component={props => (
              <GameSelect
                handleToggleMode={handleToggleMode}
                darkmode={darkmode}
                mute={mute}
                open={open}
                {...props}
              />
            )}
          />
          <Route
            path="/entername"
            exact
            component={props => (
              <NicknameInput
                setNickname={setNickname}
                nickname={nickname}
                {...props}
              />
            )}
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
