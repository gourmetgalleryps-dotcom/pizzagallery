# Google Sheets Integration Setup

To send order data to Google Sheets, you need to set up a Google Apps Script Web App.

## Step 1: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the script below

## Step 2: Copy the Script

```javascript
function doPost(e) {
  try {
    // Get parameters from URL (works with no-cors mode)
    const params = e.parameter;
    
    // Get or create the spreadsheet
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Sheet ID
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // If the sheet is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Order ID',
        'Customer Name',
        'Customer Mobile',
        'Items',
        'Item Count',
        'Total (₹)'
      ]);
    }
    
    // Append the order data
    sheet.appendRow([
      params.timestamp || new Date().toISOString(),
      params.orderId || '',
      params.customerName || '',
      params.customerMobile || '',
      params.items || '',
      params.itemCount || '0',
      params.total || '0'
    ]);
    
    return ContentService.createTextOutput("OK");
    
  } catch (error) {
    return ContentService.createTextOutput("ERROR: " + error.toString());
  }
}
```

## Step 3: Create Google Sheet

1. Create a new Google Sheet
2. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
3. Replace `YOUR_SPREADSHEET_ID` in the script with your Sheet ID

## Step 4: Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Click the gear icon ⚙️ next to "Select type" and choose "Web app"
3. Set:
   - Description: "Pizza Gallery Order Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (or "Anyone with Google account" for more security)
4. Click "Deploy"
5. Copy the Web App URL

## Step 5: Add URL to Constants

1. Open `src/data/constants.js`
2. Replace the empty string in `GOOGLE_SHEETS_WEB_APP_URL` with your Web App URL

```javascript
export const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
```

## Step 6: Test

1. Add items to cart
2. Fill in customer information
3. Click "Order on WhatsApp"
4. Check your Google Sheet - the order should appear!

## Security Note

For production, consider:
- Using "Anyone with Google account" access
- Adding authentication tokens
- Implementing rate limiting


