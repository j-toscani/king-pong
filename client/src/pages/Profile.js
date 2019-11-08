import React from "react";
import styled from "styled-components";
import HeaderPointer from "../components/header/HeaderPointer";
import ProfileData from "../components/ProfileData";

const Container = styled.main`
  background: ${props => props.theme.accent};
  flex-direction: column;
`;

const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
  margin-bottom: 100px;
`;

export default function Profile({ user }) {
  return (
    <>
      <HeaderPointer headline={"Profile"}></HeaderPointer>
      <Container>
        {/* <Image src={img}></Image> */}
        <ProfileData user={user}></ProfileData>
      </Container>
    </>
  );
}
