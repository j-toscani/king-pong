import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyle";
import defaultTheme from "./themes/default";
import darkTheme from "./themes/dark";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import GameSelect from "./pages/GameSelect";
import NicknameInput from "./pages/NicknameInput";
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import { getItem } from "./ressources/scripts/storage";

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
    sound: true,
    open: false
  });
  const [nickname, setNickname] = React.useState(getItem("nickname"));

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
            path="/select"
            component={() => (
              <GameSelect
                setSettings={setSettings}
                settings={settings}
                nickname={nickname}
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
