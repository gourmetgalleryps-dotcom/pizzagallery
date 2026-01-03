import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CART_EXPIRY_TIME } from "@/data/constants";

const CartContext = createContext();

/**
 * Cart Context Provider
 * Manages cart state with localStorage persistence and 24-hour auto-clear
 */
export function CartProvider({ children }) {
  const [cartData, setCartData, isClient] = useLocalStorage("urbanSliceCart", {
    items: [],
    timestamp: Date.now(),
  });

  const [cart, setCart] = useState({
    items: [],
    timestamp: Date.now(),
  });

  // Initialize cart from localStorage and check expiry
  useEffect(() => {
    if (isClient && cartData) {
      const now = Date.now();
      const cartAge = now - (cartData.timestamp || 0);

      // If cart is older than 24 hours, clear it
      if (cartAge > CART_EXPIRY_TIME) {
        const clearedCart = {
          items: [],
          timestamp: now,
        };
        setCartData(clearedCart);
        setCart(clearedCart);
      } else {
        setCart(cartData);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      setCartData({
        ...cart,
        timestamp: cart.timestamp || Date.now(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.items.length, isClient]);

  /**
   * Add item to cart
   * @param {Object} item - Item to add { id, name, price, image, size }
   */
  const addItem = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find(
        (i) => i.id === item.id && i.size === (item.size || "Medium")
      );

      if (existingItem) {
        // Increment quantity if item already exists
        return {
          ...prevCart,
          items: prevCart.items.map((i) =>
            i.id === item.id && i.size === (item.size || "Medium")
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      } else {
        // Add new item
        return {
          ...prevCart,
          items: [
            ...prevCart.items,
            {
              ...item,
              quantity: 1,
              size: item.size || "Medium",
            },
          ],
        };
      }
    });
  };

  /**
   * Remove item from cart
   * @param {number} itemId - ID of item to remove
   * @param {string} size - Size of item (optional)
   */
  const removeItem = (itemId, size = "Medium") => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter(
        (i) => !(i.id === itemId && i.size === size)
      ),
    }));
  };

  /**
   * Update item quantity
   * @param {number} itemId - ID of item
   * @param {number} quantity - New quantity
   * @param {string} size - Size of item (optional)
   */
  const updateQuantity = (itemId, quantity, size = "Medium") => {
    if (quantity <= 0) {
      removeItem(itemId, size);
      return;
    }

    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((i) =>
        i.id === itemId && i.size === size
          ? { ...i, quantity }
          : i
      ),
    }));
  };

  /**
   * Clear entire cart
   */
  const clearCart = () => {
    setCart({
      items: [],
      timestamp: Date.now(),
    });
  };

  /**
   * Get total number of items in cart
   */
  const getTotalItems = () => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  /**
   * Get total price of cart
   */
  const getTotalPrice = () => {
    return cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const value = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Hook to use cart context
 */
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

