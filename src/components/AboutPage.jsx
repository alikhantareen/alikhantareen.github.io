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
            Hello! This is Ali Khan, a front end web developer. Since my
            graduation, I was very fascinated in developing the web
            applications. I started my journey in March 2021 and took part in
            freecodecamp.org courses. There, I completed four certificates of
            web technologies. Certificates, including:-{" "}
            <span className="font-bold">1:</span> Responsive web design.{" "}
            <span className="font-bold">2:</span> JavaScript.{" "}
            <span className="font-bold">3:</span> Front end libraries (React,
            bootstrap, redux, jQuery). <span className="font-bold">4:</span> API
            and micro web services. Parallel to these certificates, I was also
            working on self-taught programming and made some projects too, apart
            from the course projects. Even after a long time, I am still very
            excited in web development and would really aprreciate the chance to go
            further more.
          </p>
          <div className="flex gap-4 items-center">
            <button className="font-mono p-4 w-36 bg-gray-900 text-white rounded-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-gray-800">
              resume
            </button>
            <i class="fa fa-github fa-2x"></i>
            <i class="fa fa-linkedin fa-2x"></i>
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
                <i className="fa fa-github fa-2x mt-2"></i>
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
        <button className="font-mono p-4 w-36 bg-gray-900 text-white rounded-sm hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-gray-800">
          email me
        </button>
      </section>
      <Footer />
    </div>
  );
};
export default About;
