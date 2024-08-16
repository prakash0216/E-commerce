"use client";

import { CartItem } from "@/components/CartItem";
import { CartSummary } from "@/components/CartSummary";
import { useCart } from "@/app/store/hooks/cartCalculations";
import { CheckOutButton } from "@/components/CheckOutButton";

export default function Cart() {
  const {
    cart,
    calculateSubtotal,
    calculateDiscountAmount,
    calculateDiscountedTotal,
    handleQuantityChange,
    handleRemoveItem,
  } = useCart();

  const subtotal = calculateSubtotal();
  const discountAmount = calculateDiscountAmount();
  const total = calculateDiscountedTotal();

  return (
    <div className="container mx-auto p-4 pt-14">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Cart Items Section */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className=" shadow-slate-100 shadow-xl rounded-lg p-4">
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </ul>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="md:col-span-1 ">
            <CartSummary
              subtotal={subtotal}
              discountAmount={discountAmount}
              total={total}
            />
            <CheckOutButton />
          </div>
        </div>
      )}
    </div>
  );
}
