import { useState, useMemo } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import menuData from "@/data/menu.json";
import { CATEGORIES } from "@/data/constants";

/**
 * Menu Grid Component
 * Displays filtered menu items in a responsive grid
 */
export default function MenuGrid() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.ALL);

  const filteredMenu = useMemo(() => {
    if (selectedCategory === CATEGORIES.ALL) {
      return menuData;
    }
    return menuData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div id="menu">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 p-4 md:p-0 md:py-8">
        {filteredMenu.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

