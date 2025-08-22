'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface WishlistItem {
  id: string
  productId: string
  productName: string
  productPrice: number
  productImage?: string | null
  createdAt: Date
}

interface WishlistContextType {
  wishlistItems: WishlistItem[]
  addToWishlist: (item: Omit<WishlistItem, 'id' | 'createdAt'>) => Promise<void>
  removeFromWishlist: (productId: string) => Promise<void>
  isInWishlist: (productId: string) => boolean
  wishlistCount: number
  loading: boolean
  refreshWishlist: () => Promise<void>
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])
  const [loading, setLoading] = useState(false)

  const fetchWishlist = React.useCallback(async () => {
    if (!session?.user) {
      setWishlistItems([])
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/wishlist')
      if (response.ok) {
        const items = await response.json()
        setWishlistItems(items)
      }
    } catch (error) {
      console.error('Failed to fetch wishlist:', error)
    } finally {
      setLoading(false)
    }
  }, [session?.user])

  const addToWishlist = async (item: Omit<WishlistItem, 'id' | 'createdAt'>) => {
    if (!session?.user) {
      throw new Error('Please sign in to add items to wishlist')
    }

    try {
      const response = await fetch('/api/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })

      if (response.ok) {
        const newItem = await response.json()
        setWishlistItems(prev => [newItem, ...prev])
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Failed to add to wishlist')
      }
    } catch (error) {
      console.error('Add to wishlist error:', error)
      throw error
    }
  }

  const removeFromWishlist = async (productId: string) => {
    if (!session?.user) {
      throw new Error('Please sign in to remove items from wishlist')
    }

    try {
      const response = await fetch(`/api/wishlist?productId=${productId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setWishlistItems(prev => prev.filter(item => item.productId !== productId))
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Failed to remove from wishlist')
      }
    } catch (error) {
      console.error('Remove from wishlist error:', error)
      throw error
    }
  }

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.productId === productId)
  }

  const refreshWishlist = async () => {
    await fetchWishlist()
  }

  useEffect(() => {
    if (session?.user) {
      fetchWishlist()
    } else {
      setWishlistItems([])
    }
  }, [session?.user, fetchWishlist])

  const value: WishlistContextType = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    wishlistCount: wishlistItems.length,
    loading,
    refreshWishlist
  }

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
