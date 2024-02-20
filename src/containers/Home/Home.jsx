import React from "react";
import Header from "../../components/Home/Header/Header";
import UserInfo from "../../components/Home/UserInfo/UserInfo";
import Posts from "../../components/Home/Posts/Posts";

const Home = () => {
  return (
    <main>
      <Header />
      <UserInfo />
      <Posts />
    </main>
  );
};

export default Home;
