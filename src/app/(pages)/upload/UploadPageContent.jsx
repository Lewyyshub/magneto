"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useOrder } from "@/app/context/OrderContext";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const searchParams = useSearchParams();
  const qty = Number(searchParams.get("qty")) || 0;
  const [fileInputs, setFileInputs] = useState([]);
  const router = useRouter();
  const { setUploadedFiles } = useOrder();

  useEffect(() => {
    if (qty > 0) {
      setFileInputs(Array(qty).fill(null));
    } else {
      setFileInputs([]);
    }
  }, [qty]);

  const handleFileChange = (index, file) => {
    const updatedInputs = [...fileInputs];
    updatedInputs[index] = file;
    setFileInputs(updatedInputs);
  };

  useEffect(() => {
    return () => {
      fileInputs.forEach((file) => {
        if (file) URL.revokeObjectURL(file);
      });
    };
  }, [fileInputs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded files:", fileInputs);

    const uploadedCount = fileInputs.filter(Boolean).length;
    if (uploadedCount < qty) {
      alert(`გთხოვ ატვირთო ყველა ფოტო.`);
      return;
    }

    setUploadedFiles(fileInputs); 
    router.push("/userInfo");
  };

  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen px-4 py-15 bg-gray-100 text-black">
      <h1 className="text-2xl font-bold mb-6 pb-10">
        ატვირთე ფოტო{qty === 1 ? "" : "ები"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full max-w-6xl"
      >
        {fileInputs.map((file, index) => (
          <div
            key={`file-input-${index}`}
            className="relative group w-full aspect-square bg-white rounded-xl border-2 border-dashed border-gray-300 hover:border-black transition-all duration-200 cursor-pointer flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md"
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(index, e.target.files[0])}
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
            />
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt={`Selected file ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-400 z-0 pointer-events-none">
                <span className="text-5xl font-bold mb-2">+</span>
                <span className="text-sm font-medium">ატვირთე ფოტო</span>
              </div>
            )}
          </div>
        ))}

        {fileInputs.length > 0 && (
          <div className="col-span-full">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              შემდეგ
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
