"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "../context/cart-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cartItemCount, subtotal, cart } = useCart()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
              silsile
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 relative group"
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Button (Mobile) */}
            <button
              onClick={toggleSearch}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all duration-200"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Shopping Cart */}
            <div className="relative group">
              <Link
                href="/cart"
                className="p-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all duration-200 relative flex items-center"
              >
                <div className="relative">
                  <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm transform group-hover:scale-110 transition-transform duration-200">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <span className="hidden md:block ml-2 font-medium">Cart</span>
              </Link>

              {/* Cart Preview Dropdown */}
              {cartItemCount > 0 && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Your Cart ({cartItemCount})</h3>
                  </div>

                  <div className="max-h-64 overflow-y-auto py-2">
                    {cart.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center px-4 py-3 hover:bg-gray-50">
                        <div className="h-12 w-12 bg-gray-200 rounded-md flex-shrink-0 relative overflow-hidden">
                          {item.image && (
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            {item.quantity} × Rs {item.price}
                          </p>
                        </div>
                      </div>
                    ))}

                    {cart.length > 3 && (
                      <div className="px-4 py-2 text-center text-sm text-gray-500">+{cart.length - 3} more items</div>
                    )}

                    {cart.length === 0 && <div className="px-4 py-6 text-center text-gray-500">Your cart is empty</div>}
                  </div>

                  <div className="p-4 border-t border-gray-100">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm text-gray-600">Subtotal:</span>
                      <span className="text-sm font-semibold text-gray-900">Rs {subtotal}</span>
                    </div>
                    <Link
                      href="/cart"
                      className="block w-full bg-blue-700 hover:bg-blue-800 text-white text-center py-2 rounded-md font-medium transition-colors duration-200"
                    >
                      View Cart
                    </Link>
                    <Link
                      href="/checkout"
                      className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-2 rounded-md font-medium mt-2 transition-colors duration-200"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-blue-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="text-gray-700 hover:text-blue-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
