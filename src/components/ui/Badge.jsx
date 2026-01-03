/**
 * Badge Component
 * Displays status badges with color-coded variants
 *
 * @param {string} variant - Badge variant: "veg", "non-veg", "new", "hot", "best"
 * @param {string} children - Badge text content
 * @param {string} className - Additional CSS classes
 */
export default function Badge({ variant = "default", children, className = "" }) {
  const variants = {
    veg: "bg-green-500 text-white",
    "non-veg": "bg-red-500 text-white",
    new: "bg-secondary text-white",
    hot: "bg-secondary text-white",
    best: "bg-secondary text-white",
    default: "bg-gray-500 text-white",
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-bold rounded-full shadow-sm ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}

