import { AddToCartButton } from "./AddToCartButton";

export const ProductCard = ({ product }) => {
  return (
    <div className="relative border p-4 rounded-lg w-full border-white hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="object-contain">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 object-contain mb-4"
        />
      </div>

      <h2 className="text-normal text-black font-semibold  truncate">
        {product.title}
      </h2>
      <h5 className="text-md font-light mb-2 truncate">
        {product.description}
      </h5>
      <p className="text-black text-normal font-semibold mb-2">
        ${product.price.toFixed(2)}
      </p>
      <AddToCartButton product={product} />
    </div>
  );
};
