import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

/**
 * Cart Drawer Component
 * Responsive cart interface: bottom sheet on mobile, right sidebar on desktop
 *
 * @param {boolean} isOpen - Whether the drawer is open
 * @param {function} onClose - Callback to close the drawer
 */
export default function CartDrawer({ isOpen, onClose }) {
  const { cart } = useCart();
  const [customerInfo, setCustomerInfo] = useState(null);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset customer info when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setCustomerInfo(null);
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:z-50 transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 backdrop-blur-sm" : "opacity-0 pointer-events-none backdrop-blur-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div
        className={`fixed z-50 bg-background-light flex flex-col shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          /* Mobile: Bottom Sheet */
          bottom-0 left-0 right-0 h-[92%] rounded-t-[2rem]
          /* Desktop: Right Sidebar - slides in from right with smooth animation */
          md:top-0 md:bottom-0 md:h-screen md:w-[420px] md:rounded-none md:rounded-l-[2rem] md:left-auto md:right-0
          ${isOpen 
            ? "translate-y-0 md:translate-x-0 md:scale-100 opacity-100" 
            : "translate-y-full md:translate-x-full md:scale-95 opacity-0"}`}
      >
        {/* Handle (Mobile only) */}
        <div className="flex items-center justify-center pt-3 pb-2 flex-shrink-0 cursor-grab active:cursor-grabbing md:hidden">
          <div className="h-1.5 w-12 rounded-full bg-gray-300"></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 flex-shrink-0 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Your Order
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              {cart.items.length} {cart.items.length === 1 ? "Item" : "Items"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-900"
          >
            <Icon name="close" />
          </button>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto px-6 py-2 no-scrollbar space-y-6">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <Icon name="shopping_bag" size={64} className="text-gray-300 mb-4" />
              <p className="text-gray-500 font-medium">
                Your cart is empty
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Add items to get started
              </p>
            </div>
          ) : (
            cart.items.map((item) => (
              <CartItem key={`${item.id}-${item.size}`} item={item} />
            ))
          )}
        </div>

        {/* Footer with Summary */}
        {cart.items.length > 0 && (
          <CartSummary
            customerInfo={customerInfo}
            onCustomerInfoSubmit={setCustomerInfo}
            onCustomerInfoCancel={() => setCustomerInfo(null)}
          />
        )}
      </div>
    </>
  );
}
