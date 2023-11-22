import React from "react";
import ProjectItem from "./ProjectItem";
import ecom from "../assets/1.png";
import tesla from "../assets/2.png";
import foodordering from "../assets/3.png";
import threadsclone from "../assets/4.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">Here are some of my projects</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={ecom}
          title="Ecom App"
          link="https://github.com/shotapailodze/crown-clothing"
          tools="React, Redux, Firebase, Styled Components"
        />
        <ProjectItem
          img={tesla}
          title="Tesla Clone"
          link="https://github.com/shotapailodze/tesla-clone"
          tools="React Js"
        />
        <ProjectItem
          img={foodordering}
          title="Food Ordering App"
          link="https://github.com/shotapailodze/Food-Delivery"
          tools="React, Tailwind"
        />
        <ProjectItem
          img={threadsclone}
          title="Threads Clone"
          link="https://github.com/shotapailodze/threads-clone"
          tools="React Js"
        />
      </div>
    </div>
  );
};

export default Projects;
