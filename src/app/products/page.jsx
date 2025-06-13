"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import products from "../../data/products"
import { useCart } from "../../context/cart-context"

export default function ProductsPage() {
  const { addToCart } = useCart()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Discover our complete collection of premium fashion items, carefully curated for style and quality.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600 text-center">Showing {filteredProducts.length} products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border border-blue-100/50"
              >
                <Link href={`/products/${product.id}`} className="block relative h-72 overflow-hidden">
                  <Image
                    src="/products/homepage.jpg"
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-700 transition-colors">
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-blue-700">Rs {product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">Rs {product.originalPrice}</span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-12 text-center">
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Load More Products
        </button>
      </section>
    </main>
  )
}
