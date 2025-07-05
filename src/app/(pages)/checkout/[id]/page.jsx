// // /app/product/[id]/page.jsx
// export default async function ProductPage({ params }) {

//   const { id } = await params;

//   return (
//     <div className="text-center p-10">
//       <h1 className="text-2xl font-bold">პროდუქტის დეტალები</h1>
//       <p className="mt-4">პროდუქტის ID: {id}</p>
//     </div>
//   );
// }
import Products from "@/app/products";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = Products.find((p) => String(p.id) === id);

  return (
    <div className="text-center p-10 text-white">
      <h1 className="text-2xl font-bold">{product?.name}</h1>
      <p className="mt-4">ფასი: {product?.price}₾</p>
    </div>
  );
}
