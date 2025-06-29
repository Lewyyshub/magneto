import React from "react";
import Image from "next/image";
function Cart() {
  return (
    <div className="w-[150px] justify-evenly hidden md:flex">
      <Image
        className="cursor-pointer filter inherit"
        src={"/cart.png"}
        alt="cart"
        width={20}
        height={20}
      />
      <Image
        className="cursor-pointer filter inherit"
        src={"/search.png"}
        alt="search"
        width={20}
        height={20}
      />
    </div>
  );
}

export default Cart;
