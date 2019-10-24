import React from "react";

import ProfileData from "../components/ProfileData";

export default {
  title: "Profile Data-Page"
};

const user = {
  wins: 5,
  losses: 2,
  rank: 3
};

export const Data = () => <ProfileData user={user}></ProfileData>;
