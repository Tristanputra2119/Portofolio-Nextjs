import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./Slideup";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const Project = () => {
  return (
    <section id='project' className='bg-gray-200 pt-5'>
      <h1 className='my-5 text-center font-bold text-2xl md:text-4xl text-[#1E1E1E]'>
        PROJECT
        <hr className='w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded'></hr>
      </h1>

      <div className='container px-5 py-5 mx-auto'>
        <div className='flex flex-wrap justify-center'>
          <div className='project-box sm:w-1/2 lg:w-1/4 rounded-lg h-1/4'>
            <div className='h-fit rounded-lg overflow-hidden cursor-default'>
              <img
                className='lg:h-40 md:h-48 w-screen object-cover object-center'
                src='/images/Eduford.png'
                alt='Eduford'
              />
              <div className='p-4'>
                <h1 className='text-2xl font-semibold mb-3'>Eduford</h1>
                <p className='leading-relaxed mb-3'>
                  A Project Using Html,CSS,And Javascript, And this is a static
                  website without an php
                </p>
                <div className='flex items-center flex-wrap '>
                  <a
                    href='https://tristanputra2119.github.io/University-Web/'
                    target='_blank'>
                    <button className='visit-button'>Visit</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='project-box sm:w-1/2 lg:w-1/4 rounded-lg h-1/4'>
            <div className='h-fit rounded-lg overflow-hidden cursor-default'>
              <img
                className='lg:h-40 w-screen object-cover object-center'
                src='/images/Foodies.png'
                alt='Foodies'
              />
              <div className='p-4'>
                <h1 className='text-2xl font-semibold mb-3'>Foodies Website</h1>
                <p className='leading-relaxed mb-3'>
                  A School Project About Restaurant E-commerce Using Bootstrap
                  5, This website is responsive
                </p>
                <div className='flex items-center flex-wrap '>
                  <a
                    href='https://tristanputra2119.github.io/foodies/'
                    target='_blank'>
                    <button className='visit-button'>Visit</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='project-box sm:w-1/2 lg:w-1/4 rounded-lg h-1/4'>
            <div className='h-fit rounded-lg overflow-hidden cursor-default'>
              <img
                className='lg:h-40 w-screen object-cover object-center'
                src='/images/OOP.png'
                alt='Foodies'
              />
              <div className='p-4'>
                <h1 className='text-2xl font-semibold mb-3'>PHP OOP CRUD</h1>
                <p className='leading-relaxed mb-3'>
                  A Website Test Project for the competency exam of 12-grade
                  skills. The website is not using CSS
                </p>
                <div className='flex items-center flex-wrap '>
                  <a
                    href='http://admincms2.epizy.com/tampil.php'
                    target='_blank'>
                    <button className='visit-button'>Visit</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
