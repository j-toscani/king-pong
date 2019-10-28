import React from "react";
import RetreatButton from "../components/RetreatButton";
import NavHeader from "../components/NavHeader";

export default {
  title: "Burger Navigation"
};

export const Before = () => <NavHeader open={false}></NavHeader>;
export const After = () => <NavHeader open={true}></NavHeader>;

export const About = () => <RetreatButton name={"About"} />;
export const Profile = () => <RetreatButton name={"Profile"} />;
