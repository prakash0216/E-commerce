"use client";

import { useSetRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";

export function useAddToCart() {
  const setCart = useSetRecoilState(cartState);

  const addToCart = (product) => {
    setCart((prevCart) => {
      console.log("Previous Cart:", prevCart);
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
        console.log("Updated Cart:", updatedCart);
        return updatedCart;
      } else {
        const newCart = [...prevCart, { ...product, quantity: 1 }];
        console.log("New Cart:", newCart);
        return newCart;
      }
    });
  };

  return { addToCart };
}
