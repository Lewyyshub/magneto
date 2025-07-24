"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  const hideBurger = () => {
    setIsActive(false);
  };

  return (
    <>
      <nav className="hidden md:flex flex-col items-center space-y-2 md:flex-row md:justify-evenly md:space-y-0 md:space-x-4 w-full md:w-[270px] text-black opacity-80">
        <div className="flex justify-evenly w-full">
          <Link
            href="/"
            className="hover:text-black hover:underline cursor-pointer"
          >
            HOME
          </Link>
          <Link
            href={"/contact"}
            className="hover:text-black hover:underline cursor-pointer"
          >
            CONTACT
          </Link>
        </div>
      </nav>

      <div className="md:hidden relative flex items-start">
        {!isActive && (
          <button onClick={toggleBurger} className="focus:outline-none">
            <IoMenu size={28} />
          </button>
        )}

        {isActive && (
          <div className="fixed inset-0 bg-white z-50 h-[30%] flex flex-col gap-6 text-[20px] p-4">
            <button
              onClick={toggleBurger}
              className="self-start text-black focus:outline-none"
            >
              <IoClose size={32} />
            </button>
            <div className="w-full h-[1px] bg-black"></div>
            <div className="navigation flex items-center justify-center flex-col font-bold gap-[20px]">
              <Link
                href="/"
                className="hover:text-black hover:underline cursor-pointer"
                onClick={hideBurger}
              >
                HOME
              </Link>
              <Link
                href={"/contact"}
                className="hover:text-black hover:underline cursor-pointer"
                onClick={hideBurger}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
