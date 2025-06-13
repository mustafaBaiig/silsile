import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">We'd love to hear from you. Get in touch with our team.</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Fashion Street
                      <br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+92 300 1234567</p>
                    <Link href="tel:+923001234567" className="text-blue-600 hover:text-blue-800">
                      Call us
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@silsile.com</p>
                    <Link href="mailto:info@silsile.com" className="text-blue-600 hover:text-blue-800">
                      Email us
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 10:00 AM - 9:00 PM
                  <br />
                  Saturday - Sunday: 11:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
