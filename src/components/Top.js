import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: ${props => props.theme.contrast};
  color: ${props => props.theme.brightFront};
  display: flex;
  align-items: center;

  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  height: 80px;
`;

const StyledH2 = styled.h2`
  color: ${props => props.theme.brightFont};
  margin: 0;
  padding: 0;
`;

function Top() {
  return (
    <StyledHeader>
      <StyledH2>This is a Header</StyledH2>
    </StyledHeader>
  );
}

export default Top;
