"use client";
import React from "react";
// import { useRouter } from "next/navigation";
function Navbar() {
  // const router = useRouter();

  // const Navigate = () => {
  //   router.push("/");
  // };
  
  return (
    <div className="flex flex-col items-center space-y-2 md:flex-row md:justify-evenly md:space-y-0 md:space-x-4 w-full md:w-[270px] text-white">
      <p
        // onClick={Navigate}
        className=" hover:text-gray-500 hover:underline cursor-pointer"
      >
        Home
      </p>
      <p className=" hover:text-gray-500 hover:underline cursor-pointer">
        Catalog
      </p>
      <p className=" hover:text-gray-500 hover:underline cursor-pointer">
        Contact
      </p>
    </div>
  );
}

export default Navbar;
