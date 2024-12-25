"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-primary  fixed bg-white  top-0 left-0 right-0 z-10">

      <div className="container mx-auto px-6  flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-medium text-gray-500  hover:bg-gray-200 hover:text-black py-4 px-4 flex">
          <span className="text-gray-900">  Ayan </span><div className="h-10 w-[1px] bg-gray-400 mx-3"></div> Curtains

        </a>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" hover:bg-gray-200 hover:text-black py-4 px-4 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${isOpen ? "block" : "hidden"
            } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li>
              <a
                href="#"
                className=" hover:bg-gray-200 hover:text-black py-4 px-4 transition-colors tracking-widest duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:bg-gray-200 hover:text-black py-4 px-4 transition-colors tracking-widest duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:bg-gray-200 hover:text-black py-4 px-4 transition-colors tracking-widest duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:bg-gray-200 hover:text-black py-4 px-4 transition-colors tracking-widest duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <ul className="flex justify-between space-x-8">
          <li>
            <a
              href="#"
              className=" hover:bg-gray-200 hover:text-black py-4 px-4 transition-colors tracking-wide duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>

            </a>
          </li>
        </ul>
      </div>
      <div className="w-[90%] mx-auto bg-gray-300 h-[1px]"></div>

      <div className='grid grid-cols-4 sm:grid-cols-7 mx-auto  sm:gap-0 w-[90%] sm:w-[50%]  text-gray-800'>
        <Link href='/' className="hover:bg-gray-200 py-2 sm:py-5 text-center hover:tracking-[6px] duration-300 ">New</Link>
        <Link href='/' className="hover:bg-gray-200 py-2 sm:py-5 text-center hover:tracking-[6px] duration-300 ">Home</Link>
        <Link href='/' className="hover:bg-gray-200 py-2 sm:py-5 text-center hover:tracking-[6px] duration-300 ">Old</Link>
        <Link href='/' className="hover:bg-gray-200 py-2 sm:py-5 text-center hover:tracking-[6px] duration-300 ">Used</Link>
        <Link href='/' className="hover:bg-gray-200 py-2 sm:py-5 text-center hover:tracking-[6px] duration-300 ">Luxury</Link>
        <Link href='/' className="hover:bg-gray-200 py-2 sm:py-5 text-center hover:tracking-[4px] duration-300 ">curtains</Link>
        <Link href='/' className="hover:bg-gray-200 py-2 sm:py-5 text-center hover:tracking-[6px] duration-300 ">sopas</Link>
      </div>
      <div className="w-[90%] mx-auto bg-gray-300 h-[1px] "></div>

    </nav>
  );
}
