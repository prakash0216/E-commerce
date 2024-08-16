"use client";

export function RemoveItemButton({ itemId, onRemove }) {
  return (
    <button
      onClick={() => onRemove(itemId)}
      className="ml-4 px-2 py-1 text-black font-semibold hover:text-blue-500"
    >
      Remove Item
    </button>
  );
}
