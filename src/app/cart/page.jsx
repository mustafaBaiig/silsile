"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react"
import { useCart } from "../../context/cart-context"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponDiscount, setCouponDiscount] = useState(0)

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    if (couponCode.toLowerCase() === "welcome10") {
      setCouponApplied(true)
      setCouponDiscount(subtotal * 0.1) // 10% discount
    } else {
      alert("Invalid coupon code")
    }
  }

  const shipping = 150 // Fixed shipping cost
  const total = subtotal + shipping - couponDiscount

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="p-4 bg-blue-50 rounded-full">
                <ShoppingBag className="h-16 w-16 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link
              href="/products"
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Cart Items ({cart.reduce((total, item) => total + item.quantity, 0)})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center"
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Clear Cart
                  </button>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                    {/* Product Image */}
                    <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg overflow-hidden relative mb-4 sm:mb-0">
                      {item.image ? (
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 sm:ml-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 text-right">
                          <p className="text-lg font-semibold text-blue-700">Rs {item.price}</p>
                          {item.originalPrice && (
                            <p className="text-sm text-gray-400 line-through">Rs {item.originalPrice}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-2 text-gray-600 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 text-gray-600 hover:text-blue-700"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="mt-3 sm:mt-0 text-red-500 hover:text-red-700 text-sm font-medium flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-blue-50">
                <Link
                  href="/products"
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" /> Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">Rs {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">Rs {shipping}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>- Rs {couponDiscount}</span>
                  </div>
                )}
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-blue-700">Rs {total}</span>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="mt-6">
                  <form onSubmit={handleApplyCoupon} className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      Apply
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-2">Try "WELCOME10" for 10% off</p>
                </div>

                {/* Checkout Button */}
                <div className="mt-6">
                  <Link
                    href="/checkout"
                    className="block w-full bg-blue-700 hover:bg-blue-800 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
