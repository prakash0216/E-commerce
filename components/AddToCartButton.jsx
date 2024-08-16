"use client";
import { useAddToCart } from "@/app/store/hooks/addToCart";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function AddToCartButton({ product }) {
  const { addToCart } = useAddToCart();
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart`, {
      autoClose: 800,
    });
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      router.push("/cart");
    }, 1000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`relative bg-blue-500 text-white py-2 px-4 rounded ${
        isAnimating ? "animate-pulse" : ""
      }`}
    >
      {isAnimating && (
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg animate-ping"></div>
      )}
      Add to Cart
    </button>
  );
}
