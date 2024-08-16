import { PurchaseButton } from "@/components/PurchaseButton";

export default function Checout() {
  return (
    <div className="container mx-auto p-4 pt-14">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Address Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Address Line 1</label>
              <input
                type="text"
                placeholder="123 Main St"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Address Line 2</label>
              <input
                type="text"
                placeholder="Apt 4B"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">City</label>
              <input
                type="text"
                placeholder="New York"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">State</label>
              <input
                type="text"
                placeholder="NY"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Zip Code</label>
              <input
                type="text"
                placeholder="10001"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Country</label>
              <input
                type="text"
                placeholder="USA"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          </form>
        </div>

        {/* Payment Information Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Card Expiry</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          </form>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <PurchaseButton />
      </div>
    </div>
  );
}
