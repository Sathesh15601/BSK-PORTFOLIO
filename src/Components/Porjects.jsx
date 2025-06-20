import React from "react";
import Title from "./Title";
import PricingPanel from "../assets/p1.png";
import WeatherWebApp from "../assets/p2.png";
import TodolistWebApp from "../assets/p3.png";
import FirstPortFolio from "../assets/p4.png";
import Fecommerceweb from "../assets/p5.png";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";

const Porjects = () => {
  const projectLists = [
    {
      _id: "1",
      name: "PRICE CARD",
      image: PricingPanel,
      description:
        "A clean and fully responsive pricing panel layout developed using HTML and CSS. This project was created as part of a practice module to enhance skills in layout structuring and modern styling. It presents multiple pricing options with a user-friendly design, ideal for SaaS platforms or subscription-based service websites.",
      techstack: [<FaHtml5 />, <FaCss3Alt />],
      preview: "https://practicepricingpanel.netlify.app/",
      github: "https://github.com/Sathesh15601/pricing-panel-htmlCss-practice",
    },
    {
      _id: "2",
      name: "WEATHER APP",
      image: WeatherWebApp,
      description:
        "A responsive weather forecast application built using HTML, CSS, and JavaScript. It fetches real-time data from the OpenWeatherMap API, allowing users to search any city worldwide. The app displays temperature, humidity, and conditions with dynamic icons and styling that change based on current weather for an interactive experience.",
      techstack: [<FaHtml5 />, <FaCss3Alt />, <RiJavascriptFill />],
      preview: "https://weatherapp-htmlcssjs.netlify.app/",
      github: "https://github.com/Sathesh15601/Weather-app",
    },
    {
      _id: "3",
      name: "Todolist ",
      image: TodolistWebApp,
      description:
        "A simple and responsive Todo List application built using React, Tailwind CSS, and Vite, designed to help users efficiently manage their daily tasks. It includes functionality to add, delete, and mark tasks as complete, with persistent storage via localStorage to ensure that data remains intact even after a page refresh.",
      techstack: [<RiReactjsLine />, <BiLogoTailwindCss />],
      preview: "https://vitetodolist.netlify.app/",
      github: "https://github.com/Sathesh15601/TodoList-from-LocalStorage",
    },
    {
      _id: "4",
      name: "MY FIRST REACT PORTFOLIO",
      image: FirstPortFolio,
      description:
        "A responsive portfolio website built with React and Vite, offering smooth navigation and dynamic content. Styled using Tailwind CSS, it features React Icons, Lottie SVG animations, and AOS scroll effects. A custom Canva background adds personality, while W3Forms handles form submissions. Deployed on Netlify for fast, reliable performance.",
      techstack: [<RiReactjsLine />, <BiLogoTailwindCss />, "AOS"],
      preview: "https://sathesh15601portfolio.netlify.app/",
      github: "https://github.com/Sathesh15601/React-Portfolio",
    },
    {
      _id: "5",
      name: "First Ecommerce Website",
      image: Fecommerceweb,
      description:
        "This is 'INPROCESS'  Iam working with both FrontEnd & BackEnd",
      techstack: [<RiReactjsLine />, <BiLogoTailwindCss />],
      preview: "Comming Soon",
      github: "https://github.com/Sathesh15601/First-E-Commerce-Project",
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-16"
      data-aos="fade-up"
    >
      <div>
        <Title text1={"ABOUT"} text2={"PROJECTS"} data-aos="fade-up" />
      </div>

      {/* Projects detials */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {projectLists.map((proList) => (
          <div
            className="w-full h-full border  bg-gray-800 border-fuchsia-900 rounded-xl p-5 shadow-xl hover:shadow-2xl transition duration-300 hover:scale-103"
            key={proList._id}
            data-aos="fade-up"
          >
            {/* Image */}
            <div>
              <img
                src={proList.image}
                alt={proList.name}
                className="rounded-lg object-cover h-80 w-full"
              />
            </div>
            {/* Content */}
            <div className=" my-5">
              <p className="text-center mb-5 py-2 bg-fuchsia-900 rounded-lg text-gap">
                {proList.name}
              </p>
              <p className="text-gray-400">{proList.description}</p>
            </div>
            {/* techstack icons */}
            <hr />

            <div className="mt-2">
              <p className="text-5xl flex justify-center gap-5 mt-2">
                {proList.techstack}
              </p>
            </div>
            {/* Buttons */}
            <div className="mt-4 flex justify-evenly gap-4">
              <a
                href={proList.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 w-full text-center border border-fuchsia-600 text-purple-600 rounded-lg hover:bg-fuchsia-800 hover:text-white transition duration-300"
              >
                Preview
              </a>
              <a
                href={proList.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 w-full text-center border border-fuchsia-600 text-purple-600 rounded-lg hover:bg-fuchsia-800 hover:text-white transition duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Porjects;
