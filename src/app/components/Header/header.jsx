"use client";
import React from "react";
import Navbar from "../navigation/navbar";
import Logo from "../logo/logo";
import Cart from "../Cart/cart";

function Header() {
  return (
    <div className="flex bg-white p-4 w-full items-center justify-between lg:justify-evenly md:justify-evenly border-b border-b-gray-500 ">
      <Navbar />
      <Logo />
      <Cart />
    </div>
  );
}

export default Header;
