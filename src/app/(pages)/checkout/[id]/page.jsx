"use client";
import Products from "@/app/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { useOrder } from "@/app/context/OrderContext";

export default function ProductPage({ params }) {
  const { id } = useParams();
  const product = Products.find((p) => String(p.id) === id);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [selectedMagnetOption, setSelectedMagnetOption] = useState(null);
  const [customQty, setCustomQty] = useState("");
  const { addToCart } = useCart();
  const router = useRouter();
  const { setOrderDetails } = useOrder();
  const [isInvalid, setIsInvalid] = useState(false);

  const priceMap = {
    4: 25,
    8: 45,
    12: 60,
  };
  const priceMap1 = {
    "მხოლოდ სადგამი": 25,
    "სადგამი + 4 ფოტო მაგნიტი": 45,
  };

  const finalQty =
    customQty !== "" && Number(customQty) >= 12
      ? Number(customQty)
      : selectedQuantity;

  const totalPrice = finalQty
    ? priceMap[finalQty] ??
      (finalQty > 12 ? priceMap[12] + (finalQty - 12) * 5 : 0)
    : 0;

  const totalPrice1 = selectedMagnetOption
    ? priceMap1[selectedMagnetOption]
    : 0;

  const handleAddToCart = () => {
    const selected = {
      id: product.id,
      name: product.name,
      image: product.image,
      quantity: selectedQuantity || 1,
      price: totalPrice || totalPrice1 || 0,
    };

    addToCart(selected);
  };
  const handlePurchaseClick = () => {
    const qtyToCheck =
      customQty !== "" && Number(customQty) >= 12
        ? Number(customQty)
        : selectedQuantity;

    if (
      !selectedMagnetOption &&
      (!qtyToCheck || (customQty !== "" && qtyToCheck < 12))
    ) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);

    setOrderDetails({
      id: product.id,
      name: product.name,
      quantity: qtyToCheck,
      magnetOption: selectedMagnetOption,
      price: totalPrice1 || totalPrice,
    });

    if (selectedMagnetOption === "მხოლოდ სადგამი") {
      router.push(`/checkout?id=${product.id}`);
    } else if (selectedMagnetOption === "სადგამი + 4 ფოტო მაგნიტი") {
      router.push(`/upload?id=${product.id}&qty=4`);
    } else if (selectedQuantity) {
      router.push(`/upload?id=${product.id}&qty=${selectedQuantity}`);
    } else if (customQty && Number(customQty) >= 12) {
      router.push(`/upload?id=${product.id}&qty=${customQty}`);
    }
  };

  useEffect(() => {
    if (selectedQuantity !== null) {
      setCustomQty("");
    }
  }, [selectedQuantity]);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="main-div lg:justify-between text-black w-full flex flex-col md:flex-col lg:flex-row items-start md:items-center justify-center md:justify-evenly min-h-screen px-4 py-10 mx-auto max-w-[1200px] bg-white overflow-auto lg:container lg:mx-auto md:gap-5 gap-5">
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
            <h1 className="text-[24px] md:text-[20px] lg:text-[40px] font-semibold italic">
              {product.name}
            </h1>
            {(selectedQuantity || customQty) && (
              <div className="text-2xl font-semibold flex gap-2 opacity-80 pt-2">
                {selectedQuantity === 4 && (
                  <>
                    <p className="line-through opacity-75 text-2xl">30.00 ₾</p>
                    <p>{totalPrice}.00 ₾</p>
                  </>
                )}
                {selectedQuantity === 8 && (
                  <>
                    <p className="line-through opacity-75 text-2xl">50.00 ₾</p>
                    <p>{totalPrice}.00 ₾</p>
                  </>
                )}
                {selectedQuantity === 12 && (
                  <>
                    <p className="line-through opacity-75 text-2xl">70.00 ₾</p>
                    <p>{totalPrice}.00 ₾</p>
                  </>
                )}
                {!selectedQuantity && customQty >= 12 && (
                  <p>{customQty * 5}.00 ₾</p>
                )}
              </div>
            )}
          </div>
          {/* 
          {product.size && (
            <div className="gap-1 flex flex-col md:flex-row md:items-center lg:flex-col lg:items-start">
              <h1 className="font-semibold text-[13px]">ზომა:</h1>
              <div className="rounded-[10px] border p-2 border-black font-semibold cursor-pointer hover:bg-gray-300 transition flex w-[40%] md:w-[40%] justify-center">
                <h1>{product.size}</h1>
              </div>
            </div>
          )} */}

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

                <div className="flex flex-col gap-1 w-full max-w-[200px] mt-4">
                  <input
                    type="number"
                    placeholder="+"
                    min="12"
                    value={customQty}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setCustomQty("");
                        setIsInvalid(false);
                      } else {
                        const number = Number(value);
                        setCustomQty(number);
                        if (number >= 12) {
                          setIsInvalid(false);
                          setSelectedQuantity(null);
                        } else {
                          setIsInvalid(true);
                        }
                      }
                    }}
                    className={`appearance-none 
    [&::-webkit-inner-spin-button]:appearance-none 
    [&::-webkit-outer-spin-button]:appearance-none
    w-10 h-10 text-center
    rounded-full border text-sm font-medium
    ${
      isInvalid
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-black"
    }
    focus:outline-none focus:ring-2 transition shadow-sm`}
                  />

                  <span className="text-[13px] text-gray-600 italic mt-1">
                    სასურველი რაოდენობა
                  </span>
                  {isInvalid && (
                    <span className="text-red-500 text-xs font-medium">
                      მინიმალური რაოდენობაა 12
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {product.magnetOptions && (
            <div className="w-full flex flex-col gap-4 mt-4">
              <div className="text-2xl font-semibold flex gap-2 opacity-80 pt-2">
                {selectedMagnetOption === "მხოლოდ სადგამი" && (
                  <>
                    <p className="line-through opacity-75 text-2xl">30.00 ₾</p>
                    <p>{totalPrice1} ₾</p>
                  </>
                )}
                {selectedMagnetOption === "სადგამი + 4 ფოტო მაგნიტი" && (
                  <>
                    <p className="line-through opacity-75 text-2xl">50.00 ₾</p>
                    <p>{totalPrice1} ₾</p>
                  </>
                )}
              </div>
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

          <div className="rounded-[40px] w-full h-[50px] bg-black text-white hover:bg-gray-900 transition mt-6">
            <button
              className="w-full h-full text-[16px] font-semibold cursor-pointer"
              onClick={handlePurchaseClick}
            >
              შეძენა
            </button>
          </div>
          <p className="text-[15px] md:text-[16px] lg:text-[18px]">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
