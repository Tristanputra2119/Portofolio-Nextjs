import React from "react";
import Image from "next/image";

type SectionHeadingProps = {
  text: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:text-center text-[#1E1E1E] font-['Concert One']">
        {text}
      </h1>
    </div>
  );
};

type SkillBoxProps = {
  name: string;
  imageSrc: string;
};

const SkillBox = ({ name, imageSrc }: SkillBoxProps) => {
  return (
    <div className="skill-box">
      <p>{name}</p>
      <img src={imageSrc} alt={name} />
    </div>
  );
};

const skills = [
  { name: "HTML", imageSrc: "/images/html.png" },
  { name: "CSS", imageSrc: "/images/css.png" },
  { name: "JavaScript", imageSrc: "/images/js.png" },
  { name: "Tailwind CSS", imageSrc: "/images/tailwind-css.png" },
  { name: "PHP", imageSrc: "/images/php.png" },
  { name: "MySQL", imageSrc: "/images/MySQL.png" },
  { name: "Laravel", imageSrc: "/images/Laravel.png" },
];

const AboutPage = () => {
  return (
    <section id="about" className="mt-0 pb-6">
      <div className="md:pt-5 md:pb-5 p-10 lg:p-2">
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 mr-auto ml-auto justify-between p-6">
            <SectionHeading text="ABOUT ME" />
            <p className="text-[#1E1E1E] mb:text-lg text-lg">
              My name is <span>Made Ngurah Tristan Putra</span>, you can call me{" "}
              <span>Tristan</span> for short. I am a 3rd year Vocational High
              School student majoring in Software Engineering at SMKN 1
              Denpasar.
            </p>
            <br />
            <p className="mb:text-lg text-lg">
              I am a passionate software engineer with a keen interest in
              exploring and embracing new technologies. With a background in
              software engineering, I thrive on the challenges of developing
              innovative solutions and solving complex problems through logical
              thinking.
            </p>
            <br />
            <p className="mb-10 text-lg">
              I am constantly seeking opportunities to expand my knowledge and
              skills in the ever-evolving field of technology.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-center">
            <SectionHeading text="SKILLS" />
            <hr className="w-12 h-1 mx-auto my-4 bg-gray-300 border-0 rounded"></hr>
            <div className="flex flex-wrap flex-row z-20 items-center justify-center">
              {skills.map((skill) => (
                <SkillBox key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
