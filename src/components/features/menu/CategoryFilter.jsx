import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { CATEGORIES, CATEGORY_LABELS } from "@/data/constants";

/**
 * Category Filter Component
 * Sticky filter bar for menu categories
 *
 * @param {string} selectedCategory - Currently selected category
 * @param {function} onCategoryChange - Callback when category changes
 */
export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = [
    { id: CATEGORIES.ALL, label: CATEGORY_LABELS[CATEGORIES.ALL], icon: null },
    {
      id: CATEGORIES.VEG,
      label: CATEGORY_LABELS[CATEGORIES.VEG],
      icon: "eco",
      iconColor: "text-green-600",
    },
    {
      id: CATEGORIES.NON_VEG,
      label: CATEGORY_LABELS[CATEGORIES.NON_VEG],
      icon: "local_fire_department",
      iconColor: "text-primary",
    },
    {
      id: CATEGORIES.BEVERAGES,
      label: CATEGORY_LABELS[CATEGORIES.BEVERAGES],
      icon: "local_bar",
      iconColor: "text-secondary",
    },
  ];

  return (
    <div className="sticky top-[88px] md:top-[72px] z-40 bg-background-light/95 backdrop-blur-sm py-2 pl-4 border-b border-[#88f59b]/20">
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pr-4">
        {categories.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex shrink-0 items-center justify-center px-5 py-2 rounded-full shadow-md transition-all active:scale-95 ${
                isActive
                  ? "bg-gradient-to-r from-[#88f59b] to-[#5fd672] text-white shadow-lg shadow-[#88f59b]/30"
                  : "bg-white text-text-muted border border-gray-200 hover:border-[#88f59b] hover:text-[#88f59b]"
              }`}
            >
              {category.icon && (
                <Icon
                  name={category.icon}
                  size={18}
                  className={`mr-1 ${isActive ? "text-white" : category.iconColor}`}
                />
              )}
              <span className="text-sm font-bold">{category.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

