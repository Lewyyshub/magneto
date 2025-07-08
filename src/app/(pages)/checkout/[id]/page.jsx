"use client";
import Products from "@/app/products";
import Image from "next/image";
import { use, useState } from "react";
export default function ProductPage({ params }) {
  const { id } = use(params);
  const product = Products.find((p) => String(p.id) === id);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [selectedMagnetOption, setSelectedMagnetOption] = useState(null);

  return (
    <div className="main-div text-black w-full items-center justify-evenly flex h-screen mx-auto container bg-white">
      <div className="image-div w-[65%] items-center justify-center flex">
        <Image
          src={product.image}
          alt="photo-magnet"
          width={550}
          height={300}
          className="rounded-[5px]"
        />
      </div>
      <div className="details-div flex gap-10 flex-col h-[540px] w-[35%] items-start">
        <div className="first-sec flex flex-col w-full gap-3">
          <h1 className="text-[30px]">{product.name}</h1>
          <p className="text-[18px]">{product.description}</p>
        </div>
        {product.size && (
          <div className="gap-1 flex flex-col">
            <h1 className="font-semibold text-[13px]">ზომა:</h1>
            <div
              className="size-div rounded-[10px] border p-2 border-black font-semibold cursor-pointer
            hover:bg-gray-300 transition ease-in-out"
            >
              <h1>{product.size}</h1>
            </div>
          </div>
        )}

        {/* ფოტო მაგნიტებისთვის (id=1) */}
        {product.magnetQuantity && (
          <div className="w-[31%] flex flex-col gap-5 text-black">
            <p className="text-[15px] font-bold">აირჩიე რაოდენობა:</p>

            <div className="flex gap-3">
              {product.magnetQuantity.map((qty) => (
                <label
                  key={qty}
                  className={`cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border-2
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
            </div>
          </div>
        )}
        {product.magnetOptions && (
          <div className="w-[31%] flex flex-col gap-5 mt-6">
            <p className="text-[15px] font-bold">აირჩიე ვარიანტი:</p>

            <div className="flex gap-2">
              {product.magnetOptions.map((option) => (
                <label
                  key={option}
                  className={`cursor-pointer flex items-center border-2 rounded-[5px] p-1 text-nowrap text-[14px]
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

        <div className="rounded-[10px] w-full border border-white h-[50px] flex justify-center bg-black text-white p-3">
          <button className="cursor-pointer">შეძენა</button>
        </div>
      </div>
    </div>
  );
}
