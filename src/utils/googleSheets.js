/**
 * Google Sheets API utility
 * Sends order data to Google Sheets via Google Apps Script Web App
 */

/**
 * Send order data to Google Sheets
 * @param {Object} orderData - Order data object
 * @param {string} orderData.orderId - Order ID
 * @param {string} orderData.customerName - Customer name
 * @param {string} orderData.customerMobile - Customer mobile number
 * @param {Array} orderData.items - Array of order items
 * @param {number} orderData.total - Total price
 * @param {string} googleSheetsWebAppUrl - Google Apps Script Web App URL
 * @returns {Promise<Object>} - Response from Google Sheets
 */
export async function sendToGoogleSheets(orderData, googleSheetsWebAppUrl) {
  if (!googleSheetsWebAppUrl) {
    console.warn("Google Sheets Web App URL not configured");
    return { success: false, error: "Google Sheets URL not configured" };
  }

  try {
    // Format items for Google Sheets
    const itemsString = orderData.items
      .map((item) => {
        // Normalize size display - replace "Small (10\")" or variations with "10 inches"
        let displaySize = item.size;
        if (displaySize && displaySize !== "Regular") {
          // If size contains "Small" or "10", normalize to "10 inches" for pizzas
          if (displaySize.includes("Small") || (displaySize.includes("10") && !displaySize.includes("inches"))) {
            displaySize = "10 inches";
          }
          const sizeText = ` (${displaySize})`;
          return `${item.quantity}x ${item.name}${sizeText}`;
        } else {
          return `${item.quantity}x ${item.name}`;
        }
      })
      .join(", ");

    // Calculate item count
    const itemCount = orderData.items.reduce((sum, item) => sum + item.quantity, 0);

    // Build URL with parameters (works better with no-cors mode)
    const params = new URLSearchParams({
      timestamp: new Date().toISOString(),
      orderId: orderData.orderId || '',
      customerName: orderData.customerName || '',
      customerMobile: orderData.customerMobile || '',
      items: itemsString || '',
      itemCount: itemCount.toString() || '0',
      total: 'NA',
    });

    // Send to Google Sheets via POST request with URL parameters
    const response = await fetch(`${googleSheetsWebAppUrl}?${params.toString()}`, {
      method: "POST",
      mode: "no-cors", // Google Apps Script doesn't support CORS, so we use no-cors
    });

    // With no-cors mode, we can't read the response, but the request is sent
    return { success: true };
  } catch (error) {
    console.error("Error sending to Google Sheets:", error);
    return { success: false, error: error.message };
  }
}


