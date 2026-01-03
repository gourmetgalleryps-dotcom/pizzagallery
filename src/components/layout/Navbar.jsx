import Icon from "@/components/ui/Icon";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

/**
 * Desktop Navbar Component
 * Shows logo, navigation links, and cart icon (desktop only)
 */
export default function Navbar({ onCartClick }) {
  const { getTotalItems } = useCart();

  return (
    <nav className="hidden md:flex sticky top-0 z-50 items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-2">
        <Icon name="local_pizza" className="text-primary text-2xl" />
        <h1 className="text-2xl font-black text-text-main tracking-tight">
          Urban Slice
        </h1>
      </div>

      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-text-main font-medium hover:text-primary transition-colors"
        >
          Home
        </Link>
        <Link
          href="#menu"
          className="text-text-main font-medium hover:text-primary transition-colors"
        >
          Menu
        </Link>
        <Link
          href="#reviews"
          className="text-text-main font-medium hover:text-primary transition-colors"
        >
          Reviews
        </Link>
        <Link
          href="#contact"
          className="text-text-main font-medium hover:text-primary transition-colors"
        >
          Contact
        </Link>
        <button
          onClick={onCartClick}
          className="relative flex items-center justify-center size-10 rounded-full bg-gray-50 hover:bg-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <Icon name="shopping_bag" className="text-text-main" />
          {getTotalItems() > 0 && (
            <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
              {getTotalItems()}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

