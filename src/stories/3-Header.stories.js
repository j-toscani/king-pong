import React from "react";
import { TopPointer, TopLogo } from "../components/Top";

export default {
  title: "Top"
};

export const HeaderLogo = () => <TopLogo headline={"KingPong"}></TopLogo>;
export const HeaderPointer = () => (
  <TopPointer headline={"Some Headline"}></TopPointer>
);
export const HeaderPointerReverse = () => (
  <TopPointer rotate={true} headline={"Some other Headline"}></TopPointer>
);
