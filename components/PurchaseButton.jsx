"use client";

export function PurchaseButton() {
  const handlePurchase = () => {
    window.location.href = "https://netbanking.hdfcbank.com";
  };

  return (
    <button
      onClick={handlePurchase}
      className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
    >
      Complete Purchase
    </button>
  );
}
