export default function Button({ variant = "default", size = "md", className = "", children, ...props }) {
  const baseStyles = `inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:pointer-events-none transform hover:-translate-y-1 shadow-lg hover:shadow-xl`

  const variantStyles = {
    default: "bg-green-700 text-white hover:bg-green-800",
    outline: "border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white bg-white",
  }

  const sizeStyles = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6",
    lg: "h-14 px-8 text-lg",
  }

  const variantClass = variantStyles[variant] || variantStyles.default
  const sizeClass = sizeStyles[size] || sizeStyles.md

  return (
    <button className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  )
}
