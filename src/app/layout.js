import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import { CartProvider } from "../context/cart-context"

export const metadata = {
  title: "Silsile - Fashion Store",
  description: "Discover your style with premium fashion items",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="antialiased" suppressHydrationWarning={true}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
