"use client";
import Products from "@/app/products";
import Image from "next/image";
import { use, useState } from "react";
export default function ProductPage({ params }) {
  const { id } = use(params);
  const product = Products.find((p) => String(p.id) === id);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [selectedMagnetOption, setSelectedMagnetOption] = useState(null);
  const priceMap = {
    4: 25,
    8: 45,
    12: 60,
  };

  const totalPrice = selectedQuantity ? priceMap[selectedQuantity] : 0;

  return (
    <div className="main-div text-black w-full flex flex-col md:flex-col lg:flex-row items-start md:items-center justify-center md:justify-evenly min-h-screen px-4 py-10 mx-auto max-w-[1200px] bg-white overflow-auto lg:container lg:mx-auto md:gap-5 gap-5">
      <div className="image-div w-full md:w-full lg:w-[55%] flex items-center justify-center mb-10 md:mb-0">
        <Image
          src={product.image}
          alt="photo-magnet"
          width={550}
          height={300}
          className="rounded-[5px] max-w-full h-auto"
        />
      </div>

      <div className="details-div flex flex-col gap-8 w-full md:w-full lg:w-[40%] md:p-4">
        <div className="first-sec flex flex-col w-full gap-3">
          <h1 className="text-[24px] md:text-[20px] lg:text-[30px] font-semibold">
            {product.name}
          </h1>
          <p className="text-[15px] md:text-[16px] lg:text-[18px]">
            {product.description}
          </p>
        </div>

        {product.size && (
          <div className="gap-1 flex flex-col md:flex-row md:items-center lg:flex-col lg:items-start">
            <h1 className="font-semibold text-[13px]">ზომა:</h1>
            <div className="rounded-[10px] border p-2 border-black font-semibold cursor-pointer hover:bg-gray-300 transition flex w-[40%] md:w-[40%] justify-center">
              <h1>{product.size}</h1>
            </div>
          </div>
        )}

        {product.magnetQuantity && (
          <div className="w-full flex flex-col gap-4 text-black">
            <p className="text-[15px] font-bold">აირჩიე რაოდენობა:</p>
            <div className="flex gap-3">
              {product.magnetQuantity.map((qty) => (
                <label
                  key={qty}
                  className={`cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border-2 hover:bg-gray-200
              ${
                selectedQuantity === qty
                  ? "border-black bg-black text-white font-bold"
                  : "border-gray-400 text-black"
              }`}
                >
                  <input
                    type="radio"
                    name="magnetQuantity"
                    value={qty}
                    className="hidden"
                    checked={selectedQuantity === qty}
                    onChange={() => setSelectedQuantity(qty)}
                  />
                  {qty}
                </label>
              ))}
              {selectedQuantity && (
                <div className="text-[16px] font-semibold">
                  ჯამური ფასი: {totalPrice} ₾
                </div>
              )}
            </div>
          </div>
        )}

        {product.magnetOptions && (
          <div className="w-full flex flex-col gap-4 mt-4">
            <p className="text-[15px] font-bold">აირჩიე ვარიანტი:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {product.magnetOptions.map((option) => (
                <label
                  key={option}
                  className={`cursor-pointer flex items-center border-2 rounded-[5px] px-3 py-2 text-nowrap text-[14px] hover:bg-gray-200
              ${
                selectedMagnetOption === option
                  ? "border-black bg-black text-white font-semibold"
                  : "border-gray-400 text-black"
              }`}
                >
                  <input
                    type="radio"
                    name="magnetOption"
                    value={option}
                    className="hidden"
                    checked={selectedMagnetOption === option}
                    onChange={() => setSelectedMagnetOption(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-[10px] w-full h-[50px] bg-black text-white hover:bg-gray-900 transition mt-6">
          <button className="w-full h-full text-[16px] font-semibold cursor-pointer">
            შეძენა
          </button>
        </div>
      </div>
    </div>
  );
}
