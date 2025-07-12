import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import { useState } from "react";

function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const { items } = useCart();

  // გამოანგარიშე საერთო რაოდენობა და ჯამური ფასი
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="w-[150px] justify-evenly hidden md:flex relative">
      <Image
        className="cursor-pointer"
        src={"/cart.png"}
        alt="cart"
        width={20}
        height={20}
        onClick={() => setCartOpen(!cartOpen)}
      />
      {cartOpen && (
        <div className="absolute top-[50px] right-0 bg-white shadow-lg rounded-lg p-4 w-[300px] z-50">
          <h1 className="font-bold mb-2">კალათა</h1>
          {items.length === 0 ? (
            <p>ცარიელია</p>
          ) : (
            <>
              <ul className="space-y-2 max-h-[300px] overflow-auto">
                {items.map((item, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <Image
                      src={item.image}
                      alt="product"
                      width={50}
                      height={50}
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p>რაოდენობა: {item.quantity}</p>
                      <p>ფასი: {item.price} ₾</p>
                    </div>
                  </li>
                ))}
              </ul>
              <hr className="my-2" />
              <div className="font-semibold">
                <p>ჯამური ფასი: {totalPrice.toFixed(2)} ₾</p>
              </div>
            </>
          )}
        </div>
      )}
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
