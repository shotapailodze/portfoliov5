import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
        alt="bg image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-300">
            I'm Shota Pailodze
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-300">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full text-gray-300">
            <a href="https://twitter.com/" target="_blank">
              <FaTwitter size={20} className="cursor-pointer" />
            </a>
            <a href="https://github.com/shotapailodze" target="_blank">
              <FaGithub size={20} className="cursor-pointer" />
            </a>
            {/* <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram size={20} className="cursor-pointer" />
            </a> */}
            <a href="https://www.linkedin.com/in/pailodze/" target="_blank">
              <FaLinkedinIn size={20} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
