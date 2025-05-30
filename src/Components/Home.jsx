import React from "react";
import { TypeAnimation } from "react-type-animation";


const Home = () => {
  return (
    <>
      <section className=" min-h-screen flex items-center justify-center">
        <div className="text-center">
          <img src="" alt="" />
          <p className="font-bold text-4xl text-white">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "HI IAM SATHESH KUMAR",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "HI IAM FRONT END DEVELOPER",
                1000,
              ]}
              wrapper="span"
              speed={40}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <p className="mt-5 text-1xl text-white">
            A front-end developer growing fast on my journey to become a
            full-stack developer."
          </p>
        </div>
      </section>
    
    </>
  );
};

export default Home;
