import { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import CartDrawer from "@/components/features/cart/CartDrawer";

/**
 * Main Layout Component
 * Responsive container that switches between mobile app-like and desktop e-commerce layouts
 *
 * @param {React.ReactNode} children - Page content
 */
export default function Layout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* Mobile Container - App-like frame */}
      <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl overflow-hidden bg-background-light md:hidden">
        {/* Mobile Header */}
        <Header onCartClick={() => setIsCartOpen(true)} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pb-24">{children}</main>

        {/* Mobile Bottom Navigation */}
        <BottomNav />

        {/* Cart Drawer */}
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>

      {/* Desktop Container - Full-width e-commerce */}
      <div className="hidden md:block min-h-screen bg-white">
        {/* Desktop Navbar */}
        <Navbar onCartClick={() => setIsCartOpen(true)} />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>

        {/* Cart Drawer */}
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </>
  );
}

