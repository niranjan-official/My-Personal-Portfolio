import React from "react";
import "./ProfileCard.css";
import Profile from "../../assets/profile.png";
import closeButton from "../../assets/close.png";
import Reveal from "../../Styles/Reveal";
import Fade from "../../Styles/Fade";
import email from "../../assets/email.png";

function ProfileCard({ setProfile }) {
  return (
    <div className="card-body">
      <div className="card-main">
        <Fade>
          <div className="profile-pic"><img src={Profile} /></div>
        </Fade>
        <div className="card-note">
          <Reveal>
            <h1>Niranjan Sabarinath</h1>
          </Reveal>
          <Reveal>
            <h2>Age: 19</h2>
          </Reveal>
          <Reveal>
            <h2 className="mt-1">Place: Kottayam, Kerala, India</h2>
          </Reveal>
          <Reveal>
            <h3 className="mt-1">Computer Science Engineering at,</h3>
          </Reveal>
          <Reveal>
            <h3>Providence College of Engineering</h3>
          </Reveal>
          <Reveal>
            <h3>(2022-2026).</h3>
          </Reveal>
          <hr className="mt-5 border border-gray-950 w-full" />

          <div className="email flex justify-center h-full items-center">
            <a
              className="mt-4 w-auto text-center"
              href="mailto:niranjansabarinath1521@gmail.com"
            >
              <span className="flex">
                <img src={email} className="mr-2"/>
                <span className="mt-1">Email Me</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <button className="close" onClick={() => setProfile(false)}>
        <img src={closeButton} />
      </button>
    </div>
  );
}

export default ProfileCard;
