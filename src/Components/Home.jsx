import React from "react";
import { TypeAnimation } from "react-type-animation";
import Logo from "../assets/sk.png";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import Porjects from "./Porjects";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section className=" min-h-screen flex flex-col items-center justify-center">
        <div>
          <img
            src={Logo}
            alt="Sathesh kumar"
            className="rounded-full mx-auto w-40 h-40 object-cover mb-10"
          />
        </div>

        <div className="text-center px-4 sm:px-6 lg:px-8">
          <p className="font-bold text-2xl sm:text-2xl md:text-5xl text-white ">
            <TypeAnimation
              sequence={[
                "HI I'M B SATHESH KUMAR ",
                1000,
                "HI I'M A FRONT-END DEVELOPER",
                1000,
              ]}
              wrapper="span"
              speed={40}
              style={{ display: "flex", textAlign: "center" }}
              repeat={Infinity}
            />
          </p>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A front-end developer growing fast on my journey to become a
            full-stack developer.
          </p>
        </div>

        {/* Links to connect */}
        <div className="text-4xl flex gap-5 text-white mt-5 bg-gray-800 p-3 rounded-lg">
          <a
            href="https://github.com/Sathesh15601"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubInverted className="hover:text-fuchsia-400  transition duration-300 hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/sathesh15601"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-fuchsia-400  transition duration-300 hover:scale-110" />
          </a>
          <a
            href="https://Sathesh15601@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail className="hover:text-fuchsia-400  transition duration-300 hover:scale-110" />
          </a>
        </div>
      </section>
      <section id="contact" className="min-h-screen  text-white px-6 py-16">
        <About />
        <Porjects />
        <Contact />
      </section>
    </>
  );
};

export default Home;
