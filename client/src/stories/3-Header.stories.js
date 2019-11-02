import React from "react";
import HeaderPointer from "../components/Header/HeaderPointer";
import HeaderLogo from "../components/HeaderLogo";

export default {
  title: "Top"
};

export const LogoTop = () => <HeaderLogo headline={"KingPong"}></HeaderLogo>;
export const PointerTop = () => (
  <HeaderPointer
    onClick={() => console.log("retreat")}
    headline={"Some Headline"}
  ></HeaderPointer>
);
export const HeaderPointerReverse = () => (
  <HeaderPointer
    onClick={() => console.log("retreat")}
    rotate={true}
    headline={"Some other Headline"}
  ></HeaderPointer>
);
