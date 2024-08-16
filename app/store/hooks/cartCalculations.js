"use client";

import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";

export function useCart() {
  const [cart, setCart] = useRecoilState(cartState);
  const discountPercentage = 10; // Fixed 10% discount

  const handleQuantityChange = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDiscountAmount = () => {
    const subtotal = calculateSubtotal();
    return (subtotal * discountPercentage) / 100;
  };

  const calculateDiscountedTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = calculateDiscountAmount();
    return subtotal - discountAmount;
  };

  return {
    cart,
    discountPercentage,
    calculateSubtotal,
    calculateDiscountAmount,
    calculateDiscountedTotal,
    handleQuantityChange,
    handleRemoveItem,
  };
}
