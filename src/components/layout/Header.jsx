import Icon from "@/components/ui/Icon";
import { useCart } from "@/context/CartContext";

/**
 * Mobile Header Component
 * Shows greeting, logo, and cart button (mobile only)
 */
export default function Header({ onCartClick }) {
  const { getTotalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 pt-12 pb-4 bg-background-light/95 backdrop-blur-md md:hidden">
      <div className="flex flex-col">
        <p className="text-xs font-bold text-text-muted tracking-wide uppercase">
          Good Afternoon,
        </p>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-black text-text-main tracking-tight">
            Urban Slice
          </h1>
          <Icon name="local_pizza" className="text-primary text-3xl font-bold" />
        </div>
      </div>
      <button
        onClick={onCartClick}
        className="relative flex items-center justify-center size-10 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow group"
      >
        <Icon name="shopping_bag" className="text-text-main" />
        {getTotalItems() > 0 && (
          <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
            {getTotalItems()}
          </span>
        )}
      </button>
    </header>
  );
}

