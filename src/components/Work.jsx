import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2017,
    title: "Military Service",
    duration: "6 Years",
    details:
      "During my tenure in the military, I honed a robust set of skills that uniquely contribute to my success as a developer: Leadership and Team Management, Discipline and Time Management, Adaptability and Resilience",
  },
  {
    year: 2022,
    title: "Front End Developer | Freelancer",
    duration: "1 Year",
    details:
      "As a passionate front-end web developer, I leverage a unique blend of skills cultivated during my service in the military to create dynamic and engaging digital experiences. My focus on discipline, attention to detail, and adaptability has seamlessly translated into the world of web development.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
