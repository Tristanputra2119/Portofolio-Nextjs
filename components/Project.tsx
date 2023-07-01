import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./Slideup";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

interface ProjectBoxProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  visitLink: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  visitLink,
}) => {
  return (
    <div className='project-box sm:w-1/2 lg:w-1/4 rounded-lg h-1/4'>
      <div className='h-fit rounded-lg overflow-hidden cursor-default'>
        <img
          className='lg:h-40 md:h-48 w-screen object-cover object-center'
          src={imageSrc}
          alt={imageAlt}
        />
        <div className='p-4'>
          <h1 className='text-2xl font-semibold mb-3'>{title}</h1>
          <p className='leading-relaxed mb-3'>{description}</p>
          <div className='flex items-center flex-wrap '>
            <a href={visitLink} target='_blank'>
              <button className='visit-button'>Visit</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project: React.FC = () => {
  const projects: ProjectBoxProps[] = [
    {
      imageSrc: "/images/Eduford.png",
      imageAlt: "Eduford",
      title: "Eduford",
      description:
        "A website Using Html,Css,Javascript, This website is made because of my school project, this website is responsive",
      visitLink: "https://tristanputra2119.github.io/University-Web/",
    },
    {
      imageSrc: "/images/Foodies.png",
      imageAlt: "Foodies",
      title: "Foodies Website",
      description:
        "A School Project About Restaurant E-commerce Using Bootstrap 5, This website is responsive",
      visitLink: "https://tristanputra2119.github.io/foodies/",
    },
    {
      imageSrc: "/images/OOP.png",
      imageAlt: "Foodies",
      title: "PHP OOP CRUD",
      description:
        "A Website Test Project for the competency exam of 12-grade skills. The website is not using CSS",
      visitLink: "http://admincms2.epizy.com/tampil.php",
    },
  ];

  return (
    <section id='project' className='bg-gray-200 pt-5'>
      <h1 className='my-5 text-center font-bold text-2xl md:text-4xl text-[#1E1E1E]'>
        PROJECT
        <hr className='w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded'></hr>
      </h1>

      <div className='container px-5 py-5 mx-auto'>
        <div className='flex flex-wrap justify-center'>
          {projects.map((project, index) => (
            <ProjectBox key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
