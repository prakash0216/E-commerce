import { QuantityControlButton } from "./QuantityControlButton";
import { RemoveItemButton } from "./RemoveItemButton";

export function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <li className="flex items-center py-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-contain mr-4"
      />
      <div className="flex-grow">
        <h2 className=" font-light ">{item.title}</h2>
        <p className="text-gray-600 font-semibold">${item.price.toFixed(2)}</p>
        <div className="flex mt-2">
          <QuantityControlButton
            itemId={item.id}
            quantity={item.quantity}
            onQuantityChange={onQuantityChange}
          />
          <RemoveItemButton itemId={item.id} onRemove={onRemove} />
        </div>
      </div>
    </li>
  );
}
