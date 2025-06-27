import React from "react";
import Image from "next/image";
function Cart() {
  return (
    <div className="w-[150px] flex justify-evenly">
      <Image
        className="cursor-pointer"
        src={"/cart.png"}
        alt="cart"
        width={20}
        height={20}
      />
      <Image
        className="cursor-pointer"
        src={"/search.png"}
        alt="search"
        width={20}
        height={20}
      />
    </div>
  );
}

export default Cart;
