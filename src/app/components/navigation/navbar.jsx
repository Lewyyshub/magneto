"use client";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* 🔹 Desktop Navigation - md და ზემოთ */}
      <nav className="hidden md:flex flex-col items-center space-y-2 md:flex-row md:justify-evenly md:space-y-0 md:space-x-4 w-full md:w-[270px] text-black opacity-80">
        <div className="flex justify-evenly w-full">
          <p className="hover:text-black hover:underline cursor-pointer">
            Home
          </p>
          <p className="hover:text-black hover:underline cursor-pointer">
            Catalog
          </p>
          <p className="hover:text-black hover:underline cursor-pointer">
            Contact
          </p>
        </div>
      </nav>

      {/* 🔹 Mobile Burger Menu - მხოლოდ sm და მარცხნივ ყოველთვის */}
      <div className="md:hidden relative flex items-start">
        {/* Burger Icon Left-Aligned */}
        {!isActive && (
          <button onClick={toggleBurger} className="focus:outline-none">
            <IoMenu size={28} />
          </button>
        )}

        {/* Dropdown Overlay */}
        {isActive && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col gap-6 text-[20px] p-4">
            {/* Close button */}
            <button
              onClick={toggleBurger}
              className="self-start text-black focus:outline-none"
            >
              <IoClose size={32} />
            </button>

            {/* Menu Items */}
            <p className="hover:text-black hover:underline cursor-pointer">
              Home
            </p>
            <p className="hover:text-black hover:underline cursor-pointer">
              Catalog
            </p>
            <p className="hover:text-black hover:underline cursor-pointer">
              Contact
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

// // import { useRouter } from "next/navigation";
// // const router = useRouter();

// // const Navigate = () => {
// //   router.push("/");
// // };
// // onClick={Navigate}
