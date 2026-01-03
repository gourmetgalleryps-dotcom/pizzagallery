/**
 * Material Symbols Icon Component
 * Wrapper for Material Symbols Outlined icons
 *
 * @param {string} name - Icon name (e.g., "home", "shopping_bag")
 * @param {string} className - Additional CSS classes
 * @param {number} size - Icon size (default: 24)
 */
export default function Icon({ name, className = "", size = 24 }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: size }}
    >
      {name}
    </span>
  );
}

