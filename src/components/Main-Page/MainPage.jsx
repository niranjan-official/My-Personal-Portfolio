import React from "react";
import "./MainPage.css";
import instagram from "../../assets/insta.png";
import linkedIn from "../../assets/linkedIn.png";
import whatsapp from "../../assets/whatsapp.png";
import github from "../../assets/github.png";
import Reveal from "../../Styles/Reveal";
import Typewriter from "typewriter-effect";

function MainPage() {
  const contacts = [
    {
      app: "instagram",
      link: "https://instagram.com/niranjanofficial__?igshid=NTc4MTIwNjQ2YQ==",
      src: instagram,
    },
    {
      app: "linkedIn",
      link: "http://www.linkedin.com/in/niranjansabarinath",
      src: linkedIn,
    },
    {
      app: "whatsapp",
      link: "https://api.whatsapp.com/send?phone=7736223205",
      src: whatsapp,
    },
    {
      app: "github",
      link: "https://github.com/niranjan-official",
      src: github,
    },
  ];
  return (
    <section>
      <div className="main">
        <div className="note p-10">
          <Reveal>
            <h3>Welcome to my page</h3>
          </Reveal>

          <Reveal>
            <div className="name">
            <h1>
              <span className="span">Hi I'm&nbsp;</span>
              <span className="text-teal-500">Niranjan Sabarinath</span>
            </h1>
            </div>
          </Reveal>

          <Reveal>
            <Typewriter
              wrapperClassName="Typewriter__wrapper"
              cursorClassName='Typewriter__cursor'
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(2500)
                  .start();
              }}
            />
          </Reveal>
          <Reveal>
            <h4 className="mt-10">
              Passionate ReactJS developer adept at fusing futuristic tech into
              web projects. Committed to crafting dynamic, forward-looking
              digital experience
            </h4>
          </Reveal>
          <Reveal>
            <h5 className="mt-24 ml-10 text-gray-300">Connect with me:</h5>
          </Reveal>
          <Reveal>
            <div className="ml-8 mt-2 contact">
              {contacts.map((obj) => (
                <a href={obj.link} className="cursor-pointer">
                  <img src={obj.src} alt={obj.app} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
