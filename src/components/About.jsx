import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full p-8">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold text-[#001b5e]">About Me</p>
        </div>
        <div className="max-w-[1040px] w-full grid grid-cols-2 gap-8">
          <div></div>
        </div>
        <div className="max-w-[1040px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi I'm Shota, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              Welcome to my digital playground, where pixels come to life, and
              code dances to the rhythm of creativity. I'm Shota, a passionate
              front-end web developer on a mission to turn imaginative ideas
              into seamless, visually stunning digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
