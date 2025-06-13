import Image from "next/image"
import Link from "next/link"
import { Award, Heart, Shield, Truck } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Passion for Fashion",
      description: "We live and breathe fashion, bringing you the latest trends with authentic style and creativity.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Premium Quality",
      description:
        "Every piece is carefully selected and crafted to meet the highest standards of quality and durability.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Customer Trust",
      description: "Your satisfaction is our priority. We build lasting relationships through trust and reliability.",
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Fast Delivery",
      description: "Quick and secure delivery to your doorstep, ensuring your fashion reaches you on time.",
    },
  ]

  const team = [
    {
      name: "Sarah Ahmed",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      description: "Fashion enthusiast with 10+ years of experience in the industry.",
    },
    {
      name: "Ali Hassan",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      description: "Visionary designer bringing innovative concepts to life.",
    },
    {
      name: "Fatima Khan",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      description: "Operations expert ensuring smooth customer experience.",
    },
  ]

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/homepage.jpg"
            alt="About us background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Silsile</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Where fashion meets passion, and style becomes a way of life. Discover the story behind Pakistan's most
              loved fashion destination.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, Silsile began as a dream to make premium fashion accessible to everyone in Pakistan.
                  What started as a small boutique has grown into a trusted name in the fashion industry.
                </p>
                <p>
                  We believe that fashion is more than just clothing – it's a form of self-expression, confidence, and
                  creativity. Our mission is to help you discover your unique style and feel amazing in what you wear.
                </p>
                <p>
                  Today, Silsile serves thousands of customers across Pakistan, offering carefully curated collections
                  that blend international trends with local preferences, all at prices that won't break the bank.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/products/logo.jpg" alt="Our story" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and help us serve you better every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate people behind Silsile who work tirelessly to bring you the best fashion experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Discover Your Style?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect style with Silsile. Start your fashion
            journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
