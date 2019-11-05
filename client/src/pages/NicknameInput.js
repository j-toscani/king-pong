import React from "react";
import GreetingWindow from "../components/GreetingWindow";
import HeaderLogo from "../components/header/HeaderLogo";

export default function NicknameInput({ setNickname }) {
  return (
    <>
      <HeaderLogo headline={"KingPong"}></HeaderLogo>
      <main>
        <GreetingWindow setNickname={setNickname}></GreetingWindow>
      </main>
    </>
  );
}
