import React from "react";
import ProjectItem from "./ProjectItem";
import ecom from "../assets/1.png";
import crypto from "../assets/crypto.png";
import netflix from "../assets/3.png";
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
          live="https://reactshopify-carts.netlify.app/"
          tools="React, Redux, Firebase, Styled Components"
        />
        <ProjectItem
          img={crypto}
          title="Cryptobase"
          link="https://github.com/shotapailodze/crypto"
          live="https://cryptobase-2e0e7.web.app/"
          tools="React Hooks, Context, React-Router-Dom, useParams, Light/Dark Theme, Tailwind, Authentication, Firebase, API, Hosting and more!"
        />
        <ProjectItem
          img={netflix}
          title="Netflix Clone"
          link="https://github.com/shotapailodze/netflix"
          live="https://netflix-6b5fe.web.app/"
          tools="React, React Router, Tailwind, TMDB Api, Firebase"
        />
        <ProjectItem
          img={threadsclone}
          title="Threads Clone"
          link="https://github.com/shotapailodze/threads-clone"
          live=""
          tools="React Js"
        />
      </div>
    </div>
  );
};

export default Projects;
