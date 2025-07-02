import Image from "next/image";
import React from "react";

function ProductCard() {
  return (
    <div className="flex flex-col md:flex-row p-8 w-full items-center justify-evenly lg:justify-around gap-4 pt-12">
      {/** კარტა 1 */}
      <div className="bg-white w-full md:max-w-[200px] lg:max-w-[350px] p-1 text-black flex flex-col items-center">
        <div className="image">
          <Image src={"/magneto.jpg"} alt="iphone" width={340} height={200} />
        </div>
        <p>ფოტო მაგნიტი</p>
        <p>25₾</p>
        <div className="btn bg-green-500 w-[60px] p-1 flex items-center justify-center rounded-[20px] text-[12px] font-bold hover:bg-green-700">
          <button className="cursor-pointer">შეძენა</button>
        </div>
      </div>

      {/** კარტა 2 */}
      <div className="bg-white w-full md:max-w-[200px] lg:max-w-[350px] p-1 text-black flex flex-col items-center">
        <div className="image">
          <Image src={"/magneto.jpg"} alt="iphone" width={340} height={200} />
        </div>
        <p>ფოტო მაგნიტი</p>
        <p>25₾</p>
        <div className="btn bg-green-500 w-[60px] p-1 flex items-center justify-center rounded-[20px] text-[12px] font-bold hover:bg-green-700">
          <button className="cursor-pointer">შეძენა</button>
        </div>
      </div>

      {/** კარტა 3 */}
      <div className="bg-white w-full md:max-w-[200px] lg:max-w-[350px] p-1 text-black flex flex-col items-center">
        <div className="image">
          <Image src={"/magneto.jpg"} alt="iphone" width={340} height={200} />
        </div>
        <p>ფოტო მაგნიტი</p>
        <p>25₾</p>
        <div className="btn bg-green-500 w-[60px] p-1 flex items-center justify-center rounded-[20px] text-[12px] font-bold hover:bg-green-700">
          <button className="cursor-pointer">შეძენა</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
