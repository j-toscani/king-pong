import React from "react";
import RetreatButton from "../components/RetreatButton";
import NavTop from "../components/NavTop";

export default {
  title: "Burger Navigation"
};

export const Before = () => <NavTop state="before"></NavTop>;
export const After = () => <NavTop state="after"></NavTop>;

export const About = () => <RetreatButton name={"About"} />;
export const Profile = () => <RetreatButton name={"Profile"} />;
