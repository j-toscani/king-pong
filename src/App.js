import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyle.js";
import defaultTheme from "./themes/default.js";
import darkTheme from "./themes/dark.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About.js";
import GameSelect from "./pages/GameSelect.js";

import NicknameInput from "./pages/NicknameInput.js";
import Profile from "./pages/Profile.js";

import Welcome from "./pages/Welcome.js";
import GameRoom from "./pages/GameRoom.js";

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
  const [darkmode, setDarkmode] = React.useState(false);
  const [mute, setMute] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [nickname, setNickname] = React.useState(false);

  const user = {
    name: nickname || "Anonymous",
    wins: 5,
    losses: 2,
    rank: 3,
    players: 2
  };

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
            path="/gameroom"
            component={props => (
              <GameRoom
                nickname={nickname}
                handleToggleMode={handleToggleMode}
                darkmode={darkmode}
                mute={mute}
                open={open}
              />
            )}
          />
          <Route
            path="/select"
            exact
            component={props => (
              <GameSelect
                handleToggleMode={handleToggleMode}
                darkmode={darkmode}
                nickname={user.name}
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
                nickname={user.name}
                {...props}
              />
            )}
          />
          <Route
            path="/profile"
            exact
            component={props => <Profile user={user} {...props} />}
          />
          <Route path="/" exact component={props => <Welcome {...props} />} />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
