import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Badge from "@/components/ui/Badge";
import { useCart } from "@/context/CartContext";

/**
 * Cart Item Component
 * Displays a single cart item with quantity controls
 *
 * @param {Object} item - Cart item object
 */
export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1, item.size);
    } else {
      removeItem(item.id, item.size);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1, item.size);
  };

  return (
    <div className="flex gap-4 items-center group">
      <div className="relative shrink-0">
        <div className="w-[80px] h-[80px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        {item.badge && (
          <div className="absolute -top-2 -right-2">
            <Badge variant={item.badge.toLowerCase()}>{item.badge}</Badge>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-gray-900 font-bold text-lg truncate pr-2">
            {item.name}
          </h3>
          <span className="text-primary font-bold text-lg">
            NA
          </span>
        </div>
        <p className="text-gray-500 text-xs mb-3 truncate">
          {item.size}
        </p>
        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-gray-100 rounded-full p-1 h-9">
            <button
              onClick={handleDecrease}
              className="relative flex items-center justify-center min-w-[44px] min-h-[44px] -m-2 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 rounded-full"
              aria-label="Decrease quantity"
            >
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-gray-900 shadow-sm hover:text-primary transition-colors pointer-events-none">
                <Icon name="remove" size={14} className="font-bold" />
              </span>
            </button>
            <span className="w-8 text-center font-bold text-gray-900 text-sm">
              {item.quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="relative flex items-center justify-center min-w-[44px] min-h-[44px] -m-2 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 rounded-full"
              aria-label="Increase quantity"
            >
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-white shadow-sm hover:bg-primary/90 transition-colors pointer-events-none">
                <Icon name="add" size={14} className="font-bold" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

