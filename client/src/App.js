import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyle";
import colorTheme from "./themes/color";
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
    sound: true || getItem("sound")
  });
  const [nickname, setNickname] = React.useState(getItem("nickname"));

  function setSettings(name) {
    const newSettings = { ...settings };
    newSettings[name] = !settings[name];
    setItem(name, newSettings[name]);
    adjustSettings(newSettings);
  }

  const user = {
    name: nickname || "Anonymous",
    wins: getItem("won") || 0,
    losses: getItem("lost") || 0,
    rank: "tba"
  };

  return (
    <ThemeProvider theme={settings.darkmode ? darkTheme : colorTheme}>
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
              <Main
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
