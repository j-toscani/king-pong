import React from "react";
import LogoStyled from "../ressources/icons/Logo";
import SingleHeart from "../ressources/icons/SingleHeart";
import Pointer from "../ressources/icons/Pointer";
import HeartRow from "../components/HeartRow";

export default {
  title: "Icons"
};

export const ArrowRight = () => <Pointer />;
export const ArrowLeft = () => <Pointer rotate={true} />;
export const Logo = () => <LogoStyled />;
export const FullHeart = () => <SingleHeart filled={true} />;
export const EmptyHeart = () => <SingleHeart />;

export const P1TwoHeartsLeft = () => <HeartRow p1 lifes={2} />;
export const P1FullHearts = () => <HeartRow p1 lifes={5} />;
export const P2TwoHeartsLeft = () => <HeartRow lifes={2} />;
export const P2FullHearts = () => <HeartRow lifes={5} />;
