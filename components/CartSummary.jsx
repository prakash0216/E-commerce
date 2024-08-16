// src/components/CartSummary.jsx
export function CartSummary({ subtotal, discountAmount, total }) {
  return (
    <div className=" shadow-slate-100 shadow-xl rounded-lg p-4">
      <h2 className="text-xl font-bold">Cart Summary</h2>
      <div className="mt-2">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p className="text-green-600">
          Discount (10%): -${discountAmount.toFixed(2)}
        </p>
        <p className="font-semibold mt-4">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
