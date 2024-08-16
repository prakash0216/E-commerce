"use client";

export function QuantityControlButton({ itemId, quantity, onQuantityChange }) {
  const handleInputChange = (e) => {
    const value = e.target.value;
    const newQuantity = parseInt(value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      onQuantityChange(itemId, newQuantity);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => onQuantityChange(itemId, Math.max(quantity - 1, 1))}
        disabled={quantity <= 1}
        className={`px-2 py-1 h-8 w-8 text-center border shadow rounded-full ${
          quantity <= 1 ? "opacity-50 " : ""
        }`}
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={handleInputChange}
        className="w-12 text-center border rounded mx-2"
      />
      <button
        onClick={() => onQuantityChange(itemId, quantity + 1)}
        className="px-2 py-1 h-8 w-8 border shadow opacity rounded-full "
      >
        +
      </button>
    </div>
  );
}
