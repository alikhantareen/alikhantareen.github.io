import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "./header";
import Footer from "./footer";
import "font-awesome/css/font-awesome.min.css";
import ProjectsData from "../ProjectData";
import SkillsData from "../SkillsData";

const About = () => {
  const projects = ProjectsData;
  const skills = SkillsData;
  return (
    <div className="font-mono dark:bg-black dark:text-white">
      <Header />
      <section className="w-full flex justify-center">
        <div
          id="heading"
          className="w-1/2 h-auto flex flex-col gap-10 items-center p-8 mt-8"
        >
          <p className="text-6xl font-mono font-extrabold">
            Hi, I am Ali Khan.
          </p>
          <p className="text-3xl font-mono font-extralight">
            A Front End Engineer.
          </p>
          <p className="font-mono text-justify">
            Hey! Myself Ali Iftikhar and I have completed my Master's in
            computer science in 2019. Since then, I am very fascinated by
            developing the web for the people out there. Therefore, I have done
            4 of the courses from freecodecamp.org including:-{" "}
            <span className="font-bold">1:</span> Responsive web design.{" "}
            <span className="font-bold">2:</span> JavaScript.{" "}
            <span className="font-bold">3:</span> Front end libraries (React,
            bootstrap, redux, jQuery). <span className="font-bold">4:</span> API
            and micro web services. I have made some miniprojects using these
            languages during the courses on freecodecamp.org.Besides these
            projects, I have made a project of frontend UI template for the
            online shopping website. I am very fascinated to build impossible
            for you.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="https://docs.google.com/document/d/1LMfCPihoLBsX43_BefKHgZ7BR0AHIuyb6EK1CTYOkgY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-mono p-4 w-36 bg-gray-900 text-white rounded-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-gray-800">
                resume
              </button>
            </a>
            <a
              href="https://github.com/alikhantareen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github fa-2x dark:bg-black dark:text-white"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ali-khan-445530136/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-linkedin fa-2x dark:bg-black dark:text-white"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="w-full mt-16">
        <div className="w-full flex justify-center">
          <p className="text-4xl font-mono font-bold">PROJECTS</p>
        </div>
        <div id="projects" className="flex justify-around p-5">
          {projects.map((project) => {
            return (
              <div
                id="project-card"
                className="w-1/4 text-center p-6 hover:-translate-y-2 transform transition shadow-2xl"
              >
                <p className="text-2xl font-mono font-bold" key={project.id}>
                  {project.heading}
                </p>
                <p className="mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github fa-2x mt-2"></i>
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-full mt-16">
        <div className="w-full flex justify-center">
          <p className="text-4xl font-mono font-bold">SKILLS</p>
        </div>
        <div className="flex flex-col items-center">
          <div
            id="skill"
            className="w-1/3 flex flex-wrap justify-center gap-6 mt-6 p-3"
          >
            {skills.map((skill) => {
              return (
                <div className="w-1/4 p-3 h-auto flex justify-center items-center hover:-translate-y-1 transform transition shadow-lg">
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-10 mt-16 mb-16">
        <div className="text-4xl font-mono font-bold">CONTACT</div>
        <a href="mailto:creditableboy@gmail.com">
          <button className="font-mono p-4 w-36 bg-gray-900 text-white rounded-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-gray-800">
            email me
          </button>
        </a>
      </section>
      <Footer />
    </div>
  );
};
export default About;
