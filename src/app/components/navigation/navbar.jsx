import React from "react";

function Navbar() {
  return (
    <div className="flex w-[270px] justify-evenly">
      <p className="text-[#555557] hover:text-[black] hover:underline">Home</p>
      <p className="text-[#555557] hover:text-[black] hover:underline">
        Catalog
      </p>
      <p className="text-[#555557] hover:text-[black] hover:underline">
        Contact
      </p>
    </div>
  );
}

export default Navbar;
