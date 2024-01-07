import React from "react";
import "./MainPage.css";
import instagram from "../../assets/contacts/insta.png";
import linkedIn from "../../assets/contacts/linkedIn.png";
import whatsapp from "../../assets/contacts/whatsapp.png";
import github from "../../assets/contacts/github.png";
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
    <div className="main flex items-center">
      <div className="flex flex-col sm:p-10 p-8">
        <Reveal>
          <h3 className="text-zinc-600">Welcome !!!</h3>
        </Reveal>

        <Reveal>
          <div className="name">
            <h1 className="flex flex-col">
              <span className="span">Hi I'm</span>
              <span className="text-teal-500">Niranjan Sabarinath</span>
            </h1>
          </div>
        </Reveal>

        <Reveal>
          <Typewriter
            wrapperClassName="Typewriter__wrapper"
            cursorClassName="Typewriter__cursor"
            onInit={(typewriter) => {
              typewriter.typeString("Web Developer").pauseFor(2500).start();
            }}
          />
        </Reveal>
        <Reveal>
          <h4 className="text-zinc-600 sm:text-lg sm:w-1/2 mt-4">
            Passionate ReactJS developer adept at fusing futuristic tech into
            web projects. Committed to crafting dynamic, forward-looking digital
            experience
          </h4>
        </Reveal>
        <Reveal>
          <div className="mt-20 ml-10">
            <h5 className="text-gray-300">Connect with me:</h5>
            <div className="mt-2 flex p-2">
              {contacts.map((obj, key) => (
                <a href={obj.link} key={key} className="cursor-pointer">
                  <img
                    src={obj.src}
                    alt={obj.app}
                    className="h-8 w-auto mr-4 hover:scale-125"
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default MainPage;
