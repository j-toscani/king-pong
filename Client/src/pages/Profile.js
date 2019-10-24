import React from "react";
import styled from "styled-components";
import { TopPointer } from "../components/Top";
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

const img =
  "https://images.unsplash.com/photo-1570942872213-1242607a35eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80";

export default function Profile({ user }) {
  return (
    <>
      <TopPointer headline={"Profile"}></TopPointer>
      <Container>
        <Image src={img}></Image>
        <ProfileData user={user}></ProfileData>
      </Container>
    </>
  );
}
