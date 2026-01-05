import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { useCart } from "@/context/CartContext";

/**
 * Product Card Component
 * Displays a single menu item with image, details, and add button
 *
 * @param {Object} product - Product object from menu.json
 */
export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: "Medium",
    });
  };

  const getCategoryIndicator = () => {
    if (product.category === "veg") {
      return (
        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
      );
    } else if (product.category === "non-veg") {
      return (
        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-red-500"></div>
      );
    }
    return null;
  };

  return (
    <Card className="group relative flex flex-col p-3 md:hover:-translate-y-1 md:hover:shadow-xl transition-all duration-300">
      <div className="relative w-full aspect-square mb-3 rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.description}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <span className="absolute top-2 right-2 w-6 h-6 rounded bg-white/90 flex items-center justify-center backdrop-blur-sm border border-green-600/20">
          {getCategoryIndicator()}
        </span>
        {product.badge && (
          <div className="absolute bottom-2 left-2">
            <Badge variant={product.badge.toLowerCase()}>{product.badge}</Badge>
          </div>
        )}
        {product.rating && (
          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-yellow-500 text-white text-[10px] font-bold rounded-full flex items-center gap-0.5">
            <Icon name="star" size={10} />
            {product.rating}
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-base font-bold text-text-main leading-tight">
            {product.name}
          </h3>
        </div>
        <p className="text-xs text-text-muted line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-black text-text-main">
            NA
          </span>
          <button
            onClick={handleAddToCart}
            className="relative flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 -mt-2 -mb-2 transition-all duration-200 active:scale-95 md:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#88f59b]/50 focus:ring-offset-1 rounded-full"
            aria-label={`Add ${product.name} to cart`}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#88f59b] to-[#5fd672] text-white shadow-md shadow-[#88f59b]/30 hover:shadow-lg hover:shadow-[#88f59b]/40 transition-all pointer-events-none">
              <Icon name="add" size={18} className="font-bold" />
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
}

