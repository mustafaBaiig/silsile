import Image from "next/image"
import Link from "next/link"
import { Filter, Grid, List, Search } from "lucide-react"
import products from "../../data/products"

export default function ProductsPage() {
  const categories = [...new Set(products.map((product) => product.category))]

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Discover our complete collection of premium fashion items, carefully curated for style and quality.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-green-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg font-medium">All Products</button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="border border-green-300 text-green-700 hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">Showing {products.length} products</p>
            <div className="flex gap-2">
              <button className="p-2 bg-green-100 text-green-700 rounded-lg">
                <Grid className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg">
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border border-green-100/50"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg?height=288&width=384"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      New
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      {product.discount}% OFF
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-green-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-green-700">Rs {product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">Rs {product.originalPrice}</span>
                      )}
                    </div>
                    <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-12 text-center">
        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Load More Products
        </button>
      </section>
    </main>
  )
}
