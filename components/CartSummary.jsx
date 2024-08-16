export function CartSummary({ subtotal, discountAmount, total, cartCount }) {
  return (
    <div className="shadow-slate-100 shadow-xl rounded-lg p-4">
      <h2 className="text-xl font-bold">Cart Summary</h2>
      <hr className="my-2 border-gray-300" />
      <div className="mt-2 space-y-2">
        <div className="flex justify-between font-light">
          <p>Price ({cartCount} items)</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-green-600 font-light">
          <p>Discount (10%)</p>
          <p>-${discountAmount.toFixed(2)}</p>
        </div>
        <hr className="border-gray-300" />
        <div className="flex justify-between font-semibold mt-2">
          <p>Total Amount</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
      <hr className="mt-2 border-gray-300" />
      <p className="text-green-600 font-normal text-md mt-2">
        You will save ${discountAmount} on this order
      </p>
    </div>
  );
}
