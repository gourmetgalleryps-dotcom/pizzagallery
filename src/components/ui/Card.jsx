/**
 * Card Component
 * Base card component with shadow and hover states
 *
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Other div props
 */
export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-surface-light rounded-2xl shadow-sm transition-all duration-300 md:hover:shadow-lg md:hover:shadow-[#88f59b]/20 md:hover:border-[#88f59b]/30 border border-transparent ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

