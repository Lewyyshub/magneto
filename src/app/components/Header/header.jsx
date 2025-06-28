'use client'
import React from "react";
import Navbar from "../navigation/navbar";
import Logo from "../logo/logo";
import Cart from "../Cart/cart";

function Header() {
  return (
    <div className="flex bg-black p-4 w-full items-center justify-evenly ">
      <Navbar />
      <Logo />
      <Cart />
    </div>
  );
}

export default Header;
