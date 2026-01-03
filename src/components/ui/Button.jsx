/**
 * Button Component
 * Reusable button with variants and sizes
 *
 * @param {string} variant - Button variant: "primary", "secondary", "outline"
 * @param {string} size - Button size: "sm", "md", "lg"
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Other button props
 */
export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/30",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline:
      "bg-white text-text-main border border-gray-200 hover:border-primary/30",
    whatsapp: "bg-whatsapp hover:bg-[#1DA851] text-white shadow-lg shadow-green-500/30",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-full font-bold transition-all duration-200 active:scale-95 md:hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

