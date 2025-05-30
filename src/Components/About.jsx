import React from "react";
import Title from "./Title";
import { VscVscodeInsiders, VscGithubInverted } from "react-icons/vsc";
import { SiCanva, SiExpress } from "react-icons/si";
import { LiaFigma, LiaHtml5 } from "react-icons/lia";
import { TbBrandCss3 } from "react-icons/tb";
import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 py-16"
    >
      <div className="max-w-5xl mx-auto">
        <Title text1={"ABOUT"} text2={"ME"} />

        <div className="font-medium text-base sm:text-lg p-5 mb-10">
          <p>
            Hi! I'm Sathesh Kumar, a front-end web developer with a strong
            passion for creating clean, responsive, and user-friendly websites.
            I specialize in building modern web interfaces using HTML, CSS,
            JavaScript, and frameworks like React.js, Tailwind CSS, and
            Bootstrap.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Experience Card */}
          <div className="flex-1 p-5 rounded-lg border border-fuchsia-900 shadow-2xl transition duration-300 hover:scale-105">
            <h1 className="text-center mb-5 font-bold text-3xl bg-fuchsia-950 rounded py-2">
              Experience
            </h1>

            <div className="mb-5">
              <p className="text-xl font-medium mb-2">
                DECCAN I SERVICE PVT LTD - Process Associate
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                Onshore/Offshore <br />9 months in US insurance verification —
                managing patient eligibility, coverage, and authorizations.
                Collaborated with providers and insurers, sharpening
                communication and detail orientation.
              </p>
            </div>

            <hr className="border-fuchsia-900 my-4" />

            <div>
              <p className="text-xl font-medium mb-2">
                GRT JEWELLERS PVT LTD - Sales Executive
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                Worked in the Chain and Necklace section, helped customers with
                product info, handled sales, maintained inventory, and supported
                sales targets while building strong customer relations.
              </p>
            </div>
          </div>

          {/* Skills + Dev Tools */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Skills Card */}
            <div className="p-5 rounded-lg border border-fuchsia-900 shadow-xl transition duration-300 hover:scale-105">
              <h1 className="text-center mb-5 font-bold text-3xl bg-fuchsia-950 rounded py-2">
                Skills
              </h1>
              <div className="flex flex-col md:flex-row justify-around gap-6">
                <div className="text-center">
                  <p className="text-xl font-medium mb-2">FRONT END</p>
                  <div className="text-4xl sm:text-5xl flex gap-4 justify-center">
                    <LiaHtml5 className="hover:text-fuchsia-700" />
                    <TbBrandCss3 className="hover:text-fuchsia-700" />
                    <BiLogoTailwindCss className="hover:text-fuchsia-700" />
                    <RiJavascriptFill className="hover:text-fuchsia-700" />
                    <RiReactjsLine className="hover:text-fuchsia-700" />
                  </div>
                </div>
                <hr className="border border-fuchsia-900" />
                <div className="text-center">
                  <p className="text-xl font-medium mb-2">BASIC BACK END</p>
                  <div className="text-4xl sm:text-5xl flex gap-4 justify-center">
                    <IoLogoNodejs className="hover:text-fuchsia-700" />
                    <SiExpress className="hover:text-fuchsia-700" />
                    <BiLogoMongodb className="hover:text-fuchsia-700" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dev Tools Card */}
            <div className="p-5 rounded-lg border border-fuchsia-900 shadow-2xl transition duration-300 hover:scale-105">
              <h1 className="text-center mb-5 font-bold text-3xl bg-fuchsia-950 rounded py-2">
                Dev Tools
              </h1>
              <div className="text-4xl sm:text-5xl flex gap-5 justify-center">
                <VscVscodeInsiders className="hover:text-fuchsia-700" />
                <VscGithubInverted className="hover:text-fuchsia-700" />
                <SiCanva className="hover:text-fuchsia-700" />
                <LiaFigma className="hover:text-fuchsia-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
