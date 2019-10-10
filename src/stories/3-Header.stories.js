import React from "react";
import Top from "../components/Top";

export default {
  title: "Top"
};

export const HeaderDefault = () => (
  <Top active={true} onClick={() => console.log("clicked")}>
    Active
  </Top>
);
