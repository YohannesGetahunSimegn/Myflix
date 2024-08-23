import React from "react";
import HomeScreen from "./HomeScreen.jsx";
import AuthScreen from "./AuthScreen.jsx";
import { userAuthStore } from "../../store/authUser";

const HomePage = () => {
  const { user } = userAuthStore();

  return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
};

export default HomePage;
