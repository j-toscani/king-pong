import React from "react";
import GreetingWindow from "../components/GreetingWindow";
import { TopLogo } from "../components/Top";

export default function NicknameInput({ setNickname }) {
  return (
    <>
      <TopLogo headline={"KingPong"}></TopLogo>
      <main>
        <GreetingWindow setNickname={setNickname}></GreetingWindow>
      </main>
    </>
  );
}
