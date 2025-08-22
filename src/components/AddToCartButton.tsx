'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useCart } from '@/contexts/CartContext'
import { toast } from 'react-hot-toast'
import { ShoppingCart } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  image?: string | null
}

interface AddToCartButtonProps {
  product: Product
  className?: string
  quantity?: number
}

export default function AddToCartButton({ product, className = '', quantity = 1 }: AddToCartButtonProps) {
  const { data: session } = useSession()
  const { addToCart } = useCart()
  const [loading, setLoading] = useState(false)

  const handleAddToCart = async () => {
    if (!session?.user) {
      toast.error('Please sign in to add items to cart')
      return
    }

    setLoading(true)
    try {
      await addToCart({
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        productImage: product.image,
        quantity
      })
      toast.success(`${product.name} added to cart!`)
    } catch (error: any) {
      toast.error(error.message || 'Failed to add to cart')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${className}`}
    >
      <ShoppingCart className="w-4 h-4" />
      {loading ? 'Adding...' : 'Add to Cart'}
    </button>
  )
}
