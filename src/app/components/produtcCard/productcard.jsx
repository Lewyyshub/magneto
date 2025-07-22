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
          className="w-full border-b-1 gap-2 shadow-md md:max-w-[200px] lg:max-w-[350px] p-2 text-black flex flex-col items-start rounded-[10px] hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-full aspect-[4/4]">
            <Image
              src={product.image}
              alt={product.name || "magnet"}
              fill
              className="rounded-[5px] object-cover"
            />
          </div>
          <p>{product.name}</p>
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-2">
              {product.oldPrice && (
                <p className="line-through text-[15px] opacity-70">
                  {product.oldPrice}
                </p>
              )}
              <p className="font-bold text-[17px] opacity-80">
                {product.price}
              </p>
            </div>
            <div className="btn bg-black w-[60px] p-1 flex items-center justify-center rounded-[20px] text-[12px] font-bold hover:bg-green-900 border-0">
              <Link href={`/checkout/${product.id}`}>ყიდვა</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
