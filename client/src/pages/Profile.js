import React from "react";
import styled from "styled-components";

import HeaderPointer from "../components/header/HeaderPointer";
import ProfileData from "../components/ProfileData";

const Container = styled.main`
  background: ${props => props.theme.accent};
  flex-direction: column;
`;

export default function Profile() {
  return (
    <>
      <HeaderPointer headline={"Profile"}></HeaderPointer>
      <Container>
        <ProfileData></ProfileData>
      </Container>
    </>
  );
}
