"use client";
import Image from "next/image";
import React from "react";
import Products from "@/app/products";
import Link from "next/link";

function ProductCard() {
  return (
    <div className="flex  flex-col md:flex-row p-8 w-full items-center justify-evenly lg:justify-evenly gap-4 pt-12">
      {Products.map((product) => (
        <div
          key={product.id}
          className="w-full border-b-1  shadow-md md:max-w-[200px] lg:max-w-[350px] p-2 text-black flex flex-col items-center rounded-[10px]"
        >
          <div className="image">
            <Image
              src={product.image}
              alt={product.name || "magnet"}
              width={340}
              height={300}
              className="rounded-[5px]"
            />
          </div>
          <p>{product.name}</p>
          <p className="font-bold">{product.price}</p>
          <div className="btn bg-green-500 w-[60px] p-1 flex items-center justify-center rounded-[20px] text-[12px] font-bold hover:bg-green-700 border-0">
            <Link href={`/checkout/${product.id}`}>ყიდვა</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
