import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import products from "../data/products"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/homepage.jpg"
            alt="Fashion collection background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            Discover Your Style at <span className="text-blue-300">Silsile</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Shop the latest fashion trends with premium quality and affordable prices
          </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Handpicked favorites just for you</p>
            </div>
            <Link
              href="/products"
              className="text-blue-700 flex items-center hover:text-blue-800 font-semibold group transition-colors"
            >
              View all <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border border-blue-100/50"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg?height=288&width=384"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      New
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-blue-700">Rs {product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">Rs {product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay in Style</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and style
              tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:outline-none focus:ring-4 focus:ring-blue-300 text-gray-900 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Subscribe
              </button>
            </form>
            <p className="text-blue-200 text-sm mt-4">No spam, unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
