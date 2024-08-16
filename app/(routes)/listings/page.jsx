import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/app/lib/fetchData";

export default async function ListingsPage() {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-14 p-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
