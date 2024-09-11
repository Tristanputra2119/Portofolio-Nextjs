"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <section id="home" className="bg-gray-200 sm:h-screen h-screen pt-2">
      <div className="flex flex-col text-center items-center justify-center pl-20 pr-20 animate-fadeIn animation-delay-2 mt-10 py-10 sm:py-20 md:py-40 md:h-full sm:h-full md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 flex justify-content-center ">
          <Image
            src="/images/Portofolio.jpg"
            alt=""
            width={350}
            height={350}
            className="rounded-full shadow-2xl"
            priority
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-2xl font-bold mt-6 md:mt-0 md:text-4xl text-[#1E1E1E]">
            Hello! I am Tristan, a Software Engineering student.
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-[#1E1E1E]">
            My name is <span>Made Ngurah Tristan Putra.</span> I am currently a university student At Primakara University.
          </p>
          <a href="#about">
            <button className="home-button">About Me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
