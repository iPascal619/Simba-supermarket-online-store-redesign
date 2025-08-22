'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useWishlist } from '@/contexts/WishlistContext'
import { Heart } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface Product {
  id: string
  name: string
  price: number
  image?: string | null
}

interface WishlistButtonProps {
  product: Product
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
}

export default function WishlistButton({
  product,
  className = '',
  size = 'md',
  showIcon = true
}: WishlistButtonProps) {
  const { data: session } = useSession()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [isLoading, setIsLoading] = useState(false)

  const inWishlist = isInWishlist(product.id)

  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-2.5'
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  const handleToggleWishlist = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!session) {
      toast.error('Please sign in to add items to your wishlist')
      return
    }

    setIsLoading(true)
    try {
      if (inWishlist) {
        await removeFromWishlist(product.id)
        toast.success('Removed from wishlist')
      } else {
        await addToWishlist({
          productId: product.id,
          productName: product.name,
          productPrice: product.price,
          productImage: product.image
        })
        toast.success('Added to wishlist')
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleToggleWishlist}
      disabled={isLoading}
      className={`
        ${className || `${sizeClasses[size]} rounded-full bg-white shadow-md hover:shadow-lg`}
        transition-all duration-200 flex items-center justify-center group relative
        ${inWishlist ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}
        ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
      `}
      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      {isLoading ? (
        <div className={`${iconSizes[size]} border-2 border-current border-t-transparent rounded-full animate-spin`} />
      ) : showIcon ? (
        <Heart 
          className={`${iconSizes[size]} transition-all duration-200 ${
            inWishlist ? 'fill-current' : 'group-hover:fill-current'
          }`} 
        />
      ) : (
        <Heart 
          className={`w-4 h-4 transition-all duration-200 ${
            inWishlist ? 'fill-current' : 'group-hover:fill-current'
          }`} 
        />
      )}
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      </div>
    </button>
  )
}
