import React, { useState } from "react";
import "./Main.css";
import MainPage from "../../components/Main-Page/MainPage";
import Navbar from "../../components/Navbar/Navbar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

function Main() {

  const [profile, setProfile] = useState(false);

  return (
    <section id="home">
     {profile && <ProfileCard setProfile={setProfile}/>}
      <Navbar setProfile={setProfile}/>
      <MainPage />
    </section>
  );
}

export default Main;
