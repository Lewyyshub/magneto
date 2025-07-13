"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UploadPage() {
  const searchParams = useSearchParams();
  const qty = Number(searchParams.get("qty")) || 0;
  const [fileInputs, setFileInputs] = useState([]);

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
    // აქ შეგიძლია ატვირთო სერვერზე
  };

  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen px-4 py-15 bg-gray-100 text-black">
      <h1 className="text-2xl font-bold mb-6">
        ატვირთე ფოტო{qty === 1 ? "" : "ები"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-xl"
      >
        {fileInputs.map((file, index) => (
          <div
            key={`file-input-${index}`}
            className="relative w-full aspect-square bg-white rounded-lg border border-dashed border-gray-400 hover:border-black transition cursor-pointer flex items-center justify-center overflow-hidden shadow-sm"
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
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-500 z-0">
                <span className="text-4xl font-bold">+</span>
                <span className="text-sm">ატვირთე ფოტო</span>
              </div>
            )}
          </div>
        ))}

        {fileInputs.length > 0 && (
          <div className="col-span-full">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
            >
              გაგზავნა
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
