import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col items-center space-y-2 md:flex-row md:justify-evenly md:space-y-0 md:space-x-4 w-full md:w-[270px]">
      <p className="text-[#555557] hover:text-black hover:underline cursor-pointer">
        Home
      </p>
      <p className="text-[#555557] hover:text-black hover:underline cursor-pointer">
        Catalog
      </p>
      <p className="text-[#555557] hover:text-black hover:underline cursor-pointer">
        Contact
      </p>
    </div>
  );
}

export default Navbar;
