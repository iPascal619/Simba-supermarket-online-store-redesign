'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface CartItem {
  id: string
  productId: string
  productName: string
  productPrice: number
  productImage?: string | null
  quantity: number
  addedAt: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: Omit<CartItem, 'id' | 'addedAt' | 'quantity'> & { quantity?: number }) => Promise<void>
  removeFromCart: (productId: string) => Promise<void>
  updateQuantity: (productId: string, quantity: number) => Promise<void>
  cartCount: number
  cartTotal: number
  loading: boolean
  refreshCart: () => Promise<void>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(false)

  const fetchCart = React.useCallback(async () => {
    if (!session?.user) {
      setCartItems([])
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/cart')
      if (response.ok) {
        const items = await response.json()
        setCartItems(items)
      }
    } catch (error) {
      console.error('Failed to fetch cart:', error)
    } finally {
      setLoading(false)
    }
  }, [session?.user])

  const addToCart = async (item: Omit<CartItem, 'id' | 'addedAt' | 'quantity'> & { quantity?: number }) => {
    if (!session?.user) {
      throw new Error('Please sign in to add items to cart')
    }

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...item,
          quantity: item.quantity || 1
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setCartItems(data.cart)
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Failed to add to cart')
      }
    } catch (error) {
      console.error('Add to cart error:', error)
      throw error
    }
  }

  const removeFromCart = async (productId: string) => {
    if (!session?.user) {
      throw new Error('Please sign in to remove items from cart')
    }

    try {
      const response = await fetch(`/api/cart?productId=${productId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setCartItems(prev => prev.filter(item => item.productId !== productId))
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Failed to remove from cart')
      }
    } catch (error) {
      console.error('Remove from cart error:', error)
      throw error
    }
  }

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!session?.user) {
      throw new Error('Please sign in to update cart')
    }

    try {
      const response = await fetch('/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      })

      if (response.ok) {
        const data = await response.json()
        setCartItems(data.cart)
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Failed to update cart')
      }
    } catch (error) {
      console.error('Update cart error:', error)
      throw error
    }
  }

  const refreshCart = async () => {
    await fetchCart()
  }

  useEffect(() => {
    fetchCart()
  }, [fetchCart])

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cartItems.reduce((total, item) => total + (item.productPrice * item.quantity), 0)

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal,
    loading,
    refreshCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
