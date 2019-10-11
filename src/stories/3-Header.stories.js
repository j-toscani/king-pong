import React from "react";
import { TopPointer, TopLogo } from "../components/Top";

export default {
  title: "Top"
};

export const HeaderLogo = () => <TopLogo headline={"KingPong"}></TopLogo>;
export const HeaderPointer = () => (
  <TopPointer
    onClick={() => console.log("retreat")}
    headline={"Some Headline"}
  ></TopPointer>
);
export const HeaderPointerReverse = () => (
  <TopPointer
    onClick={() => console.log("retreat")}
    rotate={true}
    headline={"Some other Headline"}
  ></TopPointer>
);
