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
      imageSrc: "/images/devtunes.png",
      imageAlt: "Devtunes",
      title: "Devtunes",
      description:
        "DevTunes is a music site inspired by Spotify. Users can play songs and browse public playlists without logging in.",
      visitLink: "https://github.com/Tristanputra2119/Devtunes",
    },
    {
      imageSrc: "/images/hikari.png",
      imageAlt: "Hikari",
      title: "Hikari Notes",
      description:
        "Hikari Editor is built using the .NET framework as the base language, Edge WebView2 for text preview, and WinUI 3 for ui.",
      visitLink: "https://github.com/Tristanputra2119/Hikari-Notes",
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
