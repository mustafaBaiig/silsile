import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const categories = [
    { name: "Dresses", href: "/category/dresses" },
    { name: "T-Shirts", href: "/category/t-shirts" },
    { name: "Jeans", href: "/category/jeans" },
    { name: "Jackets", href: "/category/jackets" },
  ]

  const customerService = [
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Silsile
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted fashion destination in Pakistan. Discover premium quality clothing that combines style,
              comfort, and affordability.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">123 Fashion Street, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@silsile.com</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 Silsile. All rights reserved.</div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>in Pakistan</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
