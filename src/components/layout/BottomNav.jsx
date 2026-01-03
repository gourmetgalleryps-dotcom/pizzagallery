import Icon from "@/components/ui/Icon";
import Link from "next/link";

/**
 * Bottom Navigation Component
 * Fixed bottom navigation bar (mobile only)
 */
export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 z-50 w-full max-w-md bg-white border-t border-gray-100 pb-5 pt-3 px-6 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] md:hidden">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-primary"
        >
          <Icon name="home" size={28} className="font-bold" />
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link
          href="#search"
          className="flex flex-col items-center gap-1 text-text-muted hover:text-text-main transition-colors"
        >
          <Icon name="search" size={28} />
          <span className="text-[10px] font-medium">Search</span>
        </Link>
        <Link
          href="#orders"
          className="flex flex-col items-center gap-1 text-text-muted hover:text-text-main transition-colors"
        >
          <Icon name="receipt_long" size={28} />
          <span className="text-[10px] font-medium">Orders</span>
        </Link>
        <Link
          href="#profile"
          className="flex flex-col items-center gap-1 text-text-muted hover:text-text-main transition-colors"
        >
          <Icon name="person" size={28} />
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  );
}

