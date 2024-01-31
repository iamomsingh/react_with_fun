import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return <>{!user ? "Please Login" : `Welcome ${user.username}`}</>;
};

export default Profile;
