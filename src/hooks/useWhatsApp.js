import { useMemo, useRef } from "react";
import { WHATSAPP_NUMBER } from "@/data/constants";

/**
 * Generate a unique order ID
 * @returns {string} - Order ID in format ORD-YYYYMMDD-HHMMSS-XXXX
 */
export const generateOrderId = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
  return `ORD-${year}${month}${day}-${hours}${minutes}${seconds}-${random}`;
};

/**
 * Custom hook to format cart items into WhatsApp message
 * and generate WhatsApp URL
 *
 * @param {Array} cartItems - Array of cart items with {id, name, price, quantity, size}
 * @param {Object} customerInfo - Customer information {name, mobile}
 * @param {string} providedOrderId - Optional pre-generated order ID
 * @returns {Object} - { message, url, orderId }
 */
export function useWhatsApp(cartItems = [], customerInfo = null, providedOrderId = null) {
  // Keep a stable orderId for the lifetime of this hook instance,
  // using the provided one if available.
  const orderIdRef = useRef(providedOrderId || generateOrderId());

  /**
   * Formats cart items into WhatsApp message string
   * Format:
   * *🍕 New Order - Pizza Gallery*
   * *Order ID: ORD-XXXXXXXX*
   * 
   * *Customer Details:*
   * Name: Customer Name
   * Mobile: +91 XXXXXXXXXX
   * 
   * *Menu Items:*
   * 1x Item Name (Size) - ₹Price
   * 2x Another Item - ₹Price
   * 
   * *Total: ₹XX*
   */
  const formatMessage = () => {
    if (!cartItems || cartItems.length === 0) {
      return "";
    }

    const orderId = orderIdRef.current;
    let message = "*🍕 New Order - Pizza Gallery*\n";
    message += `*Order ID: ${orderId}*\n\n`;
    
    if (customerInfo) {
      message += "*Customer Details:*\n";
      message += `Name: ${customerInfo.name}\n`;
      message += `Mobile: +91 ${customerInfo.mobile}\n\n`;
    }
    
    message += "*Menu Items:*\n";

    let total = 0;

    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      // Normalize size display - replace "Small (10\")" or variations with "10 inches"
      let displaySize = item.size;
      if (displaySize && displaySize !== "Regular") {
        // If size contains "Small" or has "10" without "inches", normalize to "10 inches" for pizzas
        if (displaySize.includes("Small") || (displaySize.includes("10") && !displaySize.includes("inches"))) {
          displaySize = "10 inches";
        }
        const sizeText = ` (${displaySize})`;
        message += `${item.quantity}x ${item.name}${sizeText} - ₹${itemTotal.toLocaleString('en-IN')}\n`;
      } else {
        message += `${item.quantity}x ${item.name} - ₹${itemTotal.toLocaleString('en-IN')}\n`;
      }
    });

    message += `\n*Total: ₹${total.toLocaleString('en-IN')}*`;

    return { message, orderId };
  };

  /**
   * Generates WhatsApp URL with encoded message
   * @param {string} message - The formatted message
   * @returns {string} - WhatsApp URL
   */
  const getWhatsAppUrl = (message) => {
    if (!message) {
      return "";
    }

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
  };

  const result = useMemo(() => formatMessage(), [cartItems, customerInfo]);

  return {
    message: result?.message || "",
    orderId: result?.orderId || "",
    url: getWhatsAppUrl(result?.message),
    formatMessage,
    getWhatsAppUrl: () => getWhatsAppUrl(result?.message),
  };
}

