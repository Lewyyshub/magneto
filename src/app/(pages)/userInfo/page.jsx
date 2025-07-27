// "use client";
// import { useOrder } from "@/app/context/OrderContext";
// import { useState } from "react";
// import { uploadMultipleImages } from "@/app/utils/uploadMultipleImages";
// import { saveOrderToFirestore } from "@/app/utils/saveOrderToFirestore";
// import { compressImages } from "@/app/utils/compressImages";

// function UserInfo() {
//   const { uploadedFiles, setUserInfo, orderDetails } = useOrder();
//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};

//     if (!name.trim()) newErrors.name = "სახელის შეყვანა სავალდებულოა";
//     else if (name.trim().length < 2)
//       newErrors.name = "სახელი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან";

//     if (!city.trim()) newErrors.city = "ქალაქის შეყვანა სავალდებულოა";

//     if (!address.trim()) newErrors.address = "მისამართის შეყვანა სავალდებულოა";
//     else if (address.trim().length < 5)
//       newErrors.address = "მისამართი უნდა იყოს მინიმუმ 5 სიმბოლო";

//     if (!phone.trim()) newErrors.phone = "მობილურის ნომერი სავალდებულოა";
//     else if (!/^[5]{1}[0-9]{8}$/.test(phone.trim()))
//       newErrors.phone = "შეიყვანე სწორი მობილურის ნომერი (მაგ: 599123456)";

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("orderDetails:", orderDetails);
//     console.log("uploadedFiles:", uploadedFiles);

//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length > 0) return;

//     try {
//       // ✅ 1. შევამოწმოთ თუ არის ფოტოები
//       if (!uploadedFiles || uploadedFiles.length === 0) {
//         alert("გთხოვ ატვირთე ფოტოები");
//         return;
//       }

//       // ✅ 2. კომპრესია
//       const compressedFiles = await compressImages(uploadedFiles);

//       // ✅ 3. ატვირთვა Cloudinary-ზე
//       const imageUrls = await uploadMultipleImages(compressedFiles);

//       const orderData = {
//         product: orderDetails || {},
//         user: { name, city, address, phone },
//         images: imageUrls,
//         createdAt: new Date(),
//       };

//       await saveOrderToFirestore(orderData);
//       alert("შეკვეთა წარმატებით გაიგზავნა!");
//     } catch (err) {
//       console.error("შეცდომა:", err);
//       alert("შეცდომა მოხდა. სცადე თავიდან.");
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl flex flex-col gap-5">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           შეავსე ინფორმაცია
//         </h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-gray-700 mb-1">
//               სახელი
//             </label>
//             <input
//               type="text"
//               placeholder="მაგ: ნიკა"
//               className={`p-3 rounded-lg border ${
//                 errors.name ? "border-red-500" : "border-gray-300"
//               } focus:outline-none focus:ring-2 focus:ring-red-300 transition`}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             {errors.name && (
//               <span className="text-sm text-red-500 mt-1">{errors.name}</span>
//             )}
//           </div>

//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-gray-700 mb-1">
//               ქალაქი
//             </label>
//             <input
//               type="text"
//               placeholder="მაგ: თბილისი"
//               className={`p-3 rounded-lg border ${
//                 errors.city ? "border-red-500" : "border-gray-300"
//               } focus:outline-none focus:ring-2 focus:ring-red-300 transition`}
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />
//             {errors.city && (
//               <span className="text-sm text-red-500 mt-1">{errors.city}</span>
//             )}
//           </div>

//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-gray-700 mb-1">
//               მისამართი
//             </label>
//             <input
//               type="text"
//               placeholder="მაგ: იოსებიძის ქუჩა #19"
//               className={`p-3 rounded-lg border ${
//                 errors.address ? "border-red-500" : "border-gray-300"
//               } focus:outline-none focus:ring-2 focus:ring-red-300 transition`}
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//             {errors.address && (
//               <span className="text-sm text-red-500 mt-1">
//                 {errors.address}
//               </span>
//             )}
//           </div>

//           <div className="flex flex-col">
//             <label className="text-sm font-medium text-gray-700 mb-1">
//               მობილურის ნომერი
//             </label>
//             <input
//               type="tel"
//               placeholder="მაგ: 599123456"
//               className={`p-3 rounded-lg border ${
//                 errors.phone ? "border-red-500" : "border-gray-300"
//               } focus:outline-none focus:ring-2 focus:ring-red-300 transition`}
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             {errors.phone && (
//               <span className="text-sm text-red-500 mt-1">{errors.phone}</span>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="mt-4 w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-pink-500 hover:to-red-400 transition duration-300"
//           >
//             გადახდა
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UserInfo;
"use client";
import { useOrder } from "@/app/context/OrderContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { setUserInfo } = useOrder();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "სახელის შეყვანა სავალდებულოა";
    else if (name.trim().length < 2)
      newErrors.name = "სახელი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან";

    if (!city.trim()) newErrors.city = "ქალაქის შეყვანა სავალდებულოა";

    if (!address.trim()) newErrors.address = "მისამართის შეყვანა სავალდებულოა";
    else if (address.trim().length < 5)
      newErrors.address = "მისამართი უნდა იყოს მინიმუმ 5 სიმბოლო";

    if (!phone.trim()) newErrors.phone = "მობილურის ნომერი სავალდებულოა";
    else if (!/^[5]{1}[0-9]{8}$/.test(phone.trim()))
      newErrors.phone = "შეიყვანე სწორი მობილურის ნომერი (მაგ: 599123456)";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setUserInfo({ name, city, address, phone });
    router.push("/payment");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          შეავსე ინფორმაცია
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              სახელი
            </label>
            <input
              type="text"
              placeholder="მაგ: ნიკა"
              className={`p-3 rounded-lg border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-300 transition`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <span className="text-sm text-red-500 mt-1">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              ქალაქი
            </label>
            <input
              type="text"
              placeholder="მაგ: თბილისი"
              className={`p-3 rounded-lg border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-300 transition`}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && (
              <span className="text-sm text-red-500 mt-1">{errors.city}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              მისამართი
            </label>
            <input
              type="text"
              placeholder="მაგ: იოსებიძის ქუჩა #19"
              className={`p-3 rounded-lg border ${
                errors.address ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-300 transition`}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && (
              <span className="text-sm text-red-500 mt-1">
                {errors.address}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              მობილურის ნომერი
            </label>
            <input
              type="tel"
              placeholder="მაგ: 599123456"
              className={`p-3 rounded-lg border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-red-300 transition`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && (
              <span className="text-sm text-red-500 mt-1">{errors.phone}</span>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-pink-500 hover:to-red-400 transition duration-300"
          >
            გადახდა
          </button>
        </form>
      </div>
    </div>
  );
}
