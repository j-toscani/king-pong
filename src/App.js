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
  const [settings, adjustSettings] = React.useState({
    darkmode: false,
    sound: true
  });
  const [nickname, setNickname] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  function toggleOpen() {
    setOpen(!open);
  }

  function setSettings(name) {
    const newSettings = { ...settings };
    newSettings[name] = !settings[name];
    adjustSettings(newSettings);
  }

  const user = {
    name: nickname || "Anonymous",
    wins: 5,
    losses: 2,
    rank: 3,
    players: 2
  };

  return (
    <ThemeProvider theme={settings["darkmode"] ? darkTheme : defaultTheme}>
      <GlobalStyles />
      <Container>
        <Router>
          <Route
            path="/about"
            exact
            component={props => <About {...props} />}
          />

          <Route
            path="/gameroom/join"
            component={props => (
              <GameRoom
                nickname={nickname}
                setSettings={setSettings}
                settings={settings}
                open={open}
                toggleOpen={toggleOpen}
              />
            )}
          />
          <Route
            path="/select"
            exact
            component={props => (
              <GameSelect
                setSettings={setSettings}
                settings={settings}
                nickname={user.name}
                open={open}
                toggleOpen={toggleOpen}
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
