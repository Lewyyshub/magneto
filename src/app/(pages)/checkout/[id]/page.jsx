import Products from "@/app/products";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = Products.find((p) => String(p.id) === id);

  return (
    <div className="text-white p-8 text-center">
      <h1 className="text-2xl font-bold">{product?.name}</h1>
      <p className="mt-4">ფასი: {product?.price}</p>
    </div>
  );
}
