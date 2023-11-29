import React from "react";
import HTML from "../assets/tools/html.png";
import CSS from "../assets/tools/css.png";
import Tailwind from "../assets/tools/tailwind.png";
import SCSS from "../assets/tools/scsssvg.png";
import ReactIcon from "../assets/tools/react.png";
import Firebase from "../assets/tools/firebase.png";
import Javascript from "../assets/tools/javascript.png";
import Github from "../assets/tools/github.png";

const Skills = () => {
  return (
    <div id="skills">
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <div>
          <p className="text-4xl font-bold text-center text-[#001b5e]">
            Skills
          </p>
          <p className="text-center py-8">
            These are some of the technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SCSS} alt="" />
            <p className="my-4">SCSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactIcon} alt="" />
            <p className="my-4">React</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
