import React from "react";
import GreetingWindow from "../components/GreetingWindow";
import HeaderLogo from "../components/header/HeaderLogo";

export default function NicknameInput() {
  return (
    <>
      <HeaderLogo headline={"KingPong"}></HeaderLogo>
      <main>
        <GreetingWindow></GreetingWindow>
      </main>
    </>
  );
}
