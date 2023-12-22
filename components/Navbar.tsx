// Import Link from Next.js
"use client"
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Project",
    page: "project",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className='w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 bg-white'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            {/* Use Link component instead of react-scroll */}
            <Link legacyBehavior href='/#home' passHref>
              <a className='container flex items-center space-x-2'>
                <h2 className='text-2xl font-bold text-[#1B1F2C]'>Tristan</h2>
              </a>
            </Link>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-800 rounded-md outline-none focus:border-gray-500 focus:border'
                onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}>
            <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              {NAV_ITEMS.map((item, idx) => (
                // Use Link component for each navigation item
                <Link legacyBehavior key={idx} href={`/#${item.page}`} passHref>
                  <a
                    className={
                      "block lg:inline-block text-[#1B1F2C] font-semibold hover:text-[#485375] md:pl-3 md:pr-3 cursor-pointer scroll-pt-5"
                    }
                    onClick={() => setNavbar(!navbar)}>
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
