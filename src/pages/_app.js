import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { Pizza } from "lucide-react";

export default function App({ Component, pageProps }) {




 


  return (
    <CartProvider>
    
      <Component {...pageProps} />
    </CartProvider>
  );
}
