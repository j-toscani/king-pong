import React from "react";
import styled from "styled-components";
import NavTop from "../components/NavTop";

import Overlay from "../components/Overlay";

const Container = styled.main`
  position: relative;
`;

export default function GameSelect() {
  const [open, setMenuoverlay] = React.useState(false);

  function handleChange() {
    setMenuoverlay(!open);
    console.log(open);
  }

  return (
    <>
      <NavTop
        state={open ? "open" : "closed"}
        handleChange={handleChange}
        headline={"GameSelect"}
      ></NavTop>
      <Container>
        <Overlay open={open} />
      </Container>
    </>
  );
}
