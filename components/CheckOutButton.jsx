import { useRouter } from "next/navigation";

export function CheckOutButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/checkout");
      }}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full"
    >
      Checkout
    </button>
  );
}
