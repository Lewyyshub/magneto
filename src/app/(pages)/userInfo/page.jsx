"use client";
import { useOrder } from "@/app/context/OrderContext";
import { useState } from "react";

function UserInfo() {
  const { uploadedFiles, setUserInfo, orderDetails } = useOrder();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, city, address, phone };
    setUserInfo(userData);

    console.log("მონაცემები:", {
      orderDetails,
      uploadedFiles,
      userData,
    });

    // აქ შემდეგ ატვირთავ Firebase-ში
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          შეავსე ინფორმაცია
        </h2>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              სახელი
            </label>
            <input
              type="text"
              placeholder="მაგ: ნიკა"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              ქალაქი
            </label>
            <input
              type="text"
              placeholder="მაგ: თბილისი"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              მისამართი
            </label>
            <input
              type="text"
              placeholder="მაგ: იოსებიძის ქუჩა #19"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              მობილურის ნომერი
            </label>
            <input
              type="number"
              placeholder="მაგ: 599123456"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-pink-500 hover:to-red-400 transition duration-300"
            onClick={handleSubmit}
          >
            შეძენა
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserInfo;
