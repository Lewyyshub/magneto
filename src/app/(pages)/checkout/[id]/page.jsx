import Products from "@/app/products";
import Image from "next/image";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = Products.find((p) => String(p.id) === id);

  return (
    <div className="text-black w-full items-center justify-evenly flex h-screen mx-auto container bg-white">
      <div className="image-div w-[65%] items-center justify-center flex">
        <Image
          src={product.image}
          alt="photo-magnet"
          width={550}
          height={300}
          className="rounded-[5px]"
        />
      </div>
      <div className="details-div flex flex-col h-[540px] w-[35%] items-start">
        <div className="first-sec flex flex-col w-full gap-3">
          <h1 className="text-[30px]">{product.name}</h1>
          <p className="text-[18px]">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
