import React from "react";
import resume from "../assets/resume/resume.pdf";
import { IoMdDownload } from "react-icons/io";
import Reveal from "@/Styles/Reveal";

function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-center px-4 sm:px-10 md:px-20 pt-16 bg-dark-1"
    >
      <Reveal>
        <div className="flex flex-col md:text-center md:items-center">
          <h1 className="text-primary text-6xl md:text-9xl magmawave">
            NIRANJAN
          </h1>
          <h2 className="text-2xl md:text-4xl tracking-widest md:tracking-[0.7rem]">
            FULL STACK DEVELOPER
          </h2>
          <p className="md:w-7/12 text-left mt-8 text-neutral-400">
            Passionate ReactJS developer adept at fusing futuristic tech into
            web projects. Committed to crafting dynamic, forward-looking digital
            experience
          </p>
          <a
            href={resume}
            download="NiranjanS_Resume.pdf"
            className="flex items-center w-fit gap-2 rounded-3xl px-4 py-2 border-2 border-primary bg-transparent mt-8 hover:text-primary"
          >
            <IoMdDownload size={20} className="text-primary" />
            My Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default Home;
