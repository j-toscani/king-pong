import React from "react";
import LogoStyled from "../ressources/icons/Logo";
import SingleHeart from "../ressources/icons/SingleHeart";
import Pointer from "../ressources/icons/Pointer";

export default {
  title: "Icons"
};

export const ArrowRight = () => <Pointer />;
export const ArrowLeft = () => <Pointer rotate={true} />;
export const Logo = () => <LogoStyled />;
export const FullHeart = () => <SingleHeart filled={true} />;
export const EmptyHeart = () => <SingleHeart />;
