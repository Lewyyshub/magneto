"use client";
import { useOrder } from "@/app/context/OrderContext";
import React, { useState } from "react";
import { compressImages } from "@/app/utils/compressImages";
import { uploadMultipleImages } from "@/app/utils/uploadMultipleImages";
import { saveOrderToFirestore } from "@/app/utils/saveOrderToFirestore";
import Image from "next/image";

export default function Payment() {
  const { orderDetails, userInfo, uploadedFiles, setUploadedFiles } =
    useOrder();
  const { name, quantity, magnetOption, price } = orderDetails || {};

  const [paymentScreenshots, setPaymentScreenshots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000); // დაბრუნება 2 წამში
  };

  // გადახდის სქრინების ასარჩევად
  const handlePaymentScreenshotsChange = (e) => {
    if (!e.target.files) return;
    setPaymentScreenshots((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  const handlePaymentSubmit = async () => {
    const allFiles = [...uploadedFiles, ...paymentScreenshots];

    if (!userInfo) {
      alert("გთხოვთ, თავიდან შეავსეთ თქვენი ინფორმაცია.");
      return;
    }

    if (allFiles.length === 0) {
      alert("გთხოვთ ატვირთეთ სქრინი და ფოტოები.");
      return;
    }

    setLoading(true);
    try {
      const compressedFiles = await compressImages(allFiles);
      const imageUrls = await uploadMultipleImages(compressedFiles);

      const orderData = {
        product: orderDetails || {},
        user: userInfo,
        images: imageUrls,
        createdAt: new Date(),
      };

      await saveOrderToFirestore(orderData);

      alert("შეკვეთა წარმატებით გაიგზავნა!");
      setUploadedFiles([]); // წაშლა კონტექსტიდან მომხმარებლის ფოტოები
      setPaymentScreenshots([]); // წაშლა გადახდის სქრინები
    } catch (err) {
      console.error(err);
      alert("შეცდომა მოხდა. სცადე თავიდან.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <div className="bg-white w-full max-w-md md:max-w-lg rounded-xl shadow-md p-6 md:p-10 space-y-6 gap-4 flex flex-col">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent text-center h-10">
          გადახდა
        </h1>

        <div className="space-y-2 text-gray-700">
          <p className="text-base md:text-lg">
            📦 <span className="font-semibold">პროდუქტი:</span> {name}
          </p>
          {magnetOption && (
            <p className="text-base md:text-lg">
              🔘 <span className="font-semibold">ვარიანტი:</span> {magnetOption}
            </p>
          )}
          {quantity && (
            <p className="text-base md:text-lg">
              🔢 <span className="font-semibold">რაოდენობა:</span> {quantity}
            </p>
          )}
          <p className="text-base md:text-lg">
            💵 <span className="font-semibold">გადასახდელი:</span>{" "}
            <span className="text-pink-600 text-xl font-bold">{price} ₾</span>
          </p>
        </div>

        <div className="bg-pink-50 border border-pink-200 rounded-lg p-2 items-start flex flex-col gap-2">
          <div>
            <p className="font-semibold text-pink-700 mb-1">
              გადარიცხეთ შემდეგ ანგარიშზე:
            </p>
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex gap-2">
              <Image src={"/tbc.png"} height={20} width={20} alt="tbc" />
              <p>1249801290478</p>
              <button
                onClick={() => handleCopy("1249801290478")}
                className="text-sm text-pink-600 hover:underline"
              >
                {copied === "1249801290478" ? "კოპირებულია" : "კოპირება"}
              </button>
            </div>
            <div className="flex gap-2 ">
              <Image src={"/bog.png"} height={20} width={20} alt="bog" />
              <p>1249801290478</p>
              <button
                onClick={() => handleCopy("1234567890001")}
                className="text-sm text-pink-600 hover:underline"
              >
                {copied === "1234567890001" ? "კოპირებულია" : "კოპირება"}
              </button>
            </div>
          </div>
        </div>
        {/* <p className="text-sm md:text-base text-pink-600 leading-relaxed whitespace-pre-line"> */}
        {/* <br />
            💳 GE12TB0000000000000000
            <br /> */}
        {/* 📄 დანიშნულება: {name} - {quantity || magnetOption} */}
        {/* </p> */}
        <div className="flex flex-col gap-2">
          <label className="block mb-2 font-semibold text-gray-800">
            ატვირთე გადახდის სქრინი
          </label>

          <label
            htmlFor="payment-screenshot"
            className={`flex cursor-pointer items-center justify-center gap-2
      rounded-md border-2 border-dashed border-pink-400
      p-4 text-pink-600 font-medium
      hover:bg-pink-50
      transition
      ${loading ? "opacity-50 cursor-not-allowed" : ""}
    `}
          >
            📤 ფაილების არჩევა
          </label>

          <input
            id="payment-screenshot"
            type="file"
            multiple
            accept="image/*"
            onChange={handlePaymentScreenshotsChange}
            disabled={loading}
            className="hidden"
          />
        </div>

        <button
          onClick={handlePaymentSubmit}
          disabled={loading}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-red-400 to-pink-500 hover:from-pink-500 hover:to-red-400 transition duration-300 text-white font-bold
                 hover:bg-pink-700 disabled:opacity-60 disabled:cursor-not-allowed "
        >
          {loading ? "იტვირთება..." : "შეკვეთის გაფორმება"}
        </button>
      </div>
    </div>
  );
}
