import { AddToCartButton } from "./AddToCartButton";

export const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md w-full  ">
      <img
        src={product.image}
        alt={product.title}
        className=" h-60 object-cover mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <AddToCartButton product={product} />
    </div>
  );
};
