/**
 * Application constants and configuration
 */

export const COLORS = {
  primary: "#555B3F",
  secondary: "#F4A261",
  cheese: "#F4A261",
  whatsapp: "#25D366",
  "background-light": "#f8f6f6",
  "background-dark": "#211112",
  "surface-light": "#ffffff",
  "surface-dark": "#2d1b1c",
  "text-main": "#181112",
  "text-muted": "#886366",
};

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

export const WHATSAPP_NUMBER = "+916302874827";

// Google Sheets Web App URL - Replace with your Google Apps Script Web App URL
// To set up: Create a Google Apps Script, deploy as Web App, and paste the URL here
export const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycby6tA0GY58FQO7XAAmD8kVhy0vuoaq6k4T5MnyAItyr4NXQf24ripZff4UOlfue9xLs/exec"

export const CATEGORIES = {
  ALL: "all",
  VEG: "veg",
  NON_VEG: "non-veg",
  BEVERAGES: "beverages",
};

export const CATEGORY_LABELS = {
  [CATEGORIES.ALL]: "All",
  [CATEGORIES.VEG]: "Veg",
  [CATEGORIES.NON_VEG]: "Non-Veg",
  [CATEGORIES.BEVERAGES]: "Beverages",
};

// Cart expiration time: 24 hours in milliseconds
export const CART_EXPIRY_TIME = 24 * 60 * 60 * 1000;

