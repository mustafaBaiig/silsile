"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load cart from localStorage on initial render (client-side only)
  useEffect(() => {
    if (!isClient) return

    try {
      const savedCart = localStorage.getItem("silsile-cart")
      if (savedCart) {
        setCart(JSON.parse(savedCart))
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error)
    } finally {
      setIsLoading(false)
    }
  }, [isClient])

  // Save cart to localStorage whenever it changes (client-side only)
  useEffect(() => {
    if (!isClient || isLoading) return

    try {
      localStorage.setItem("silsile-cart", JSON.stringify(cart))
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error)
    }
  }, [cart, isLoading, isClient])

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingItemIndex = prevCart.findIndex((item) => item.id === product.id)

      if (existingItemIndex !== -1) {
        // If product exists, update quantity
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex].quantity += quantity
        return updatedCart
      } else {
        // If product doesn't exist, add it with quantity
        return [...prevCart, { ...product, quantity }]
      }
    })
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return

    setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  // Clear cart
  const clearCart = () => {
    setCart([])
  }

  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  // Don't render cart functionality until client-side hydration is complete
  if (!isClient) {
    return (
      <CartContext.Provider
        value={{
          cart: [],
          addToCart: () => {},
          removeFromCart: () => {},
          updateQuantity: () => {},
          clearCart: () => {},
          cartItemCount: 0,
          subtotal: 0,
          isLoading: true,
        }}
      >
        {children}
      </CartContext.Provider>
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartItemCount,
        subtotal,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
