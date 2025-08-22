'use client'

import { useCart } from '@/contexts/CartContext'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function CartPage() {
  const { data: session } = useSession()
  const { cartItems, removeFromCart, updateQuantity, cartTotal, loading } = useCart()

  if (!session?.user) {
    return (
      <div className="container-padding py-16">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h1>
          <p className="text-gray-600 mb-6">Please sign in to view your cart.</p>
          <Link 
            href="/auth/signin"
            className="inline-block bg-simba-orange-500 text-white px-6 py-3 rounded-lg hover:bg-simba-orange-600 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  const handleRemoveFromCart = async (productId: string) => {
    try {
      await removeFromCart(productId)
      toast.success('Item removed from cart')
    } catch (error: any) {
      toast.error(error.message || 'Failed to remove item')
    }
  }

  const handleUpdateQuantity = async (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    
    try {
      await updateQuantity(productId, newQuantity)
    } catch (error: any) {
      toast.error(error.message || 'Failed to update quantity')
    }
  }

  if (loading) {
    return (
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-simba-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading cart...</p>
          </div>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Link 
              href="/products"
              className="inline-block bg-simba-orange-500 text-white px-6 py-3 rounded-lg hover:bg-simba-orange-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-padding py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="p-6 flex items-center space-x-4">
                {/* Product Image */}
                <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                  {item.productImage ? (
                    <Image
                      src={item.productImage}
                      alt={item.productName}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">No image</span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900">{item.productName}</h3>
                  <p className="text-simba-orange-500 font-semibold">
                    {item.productPrice.toLocaleString()} RWF
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-lg font-semibold text-gray-900 w-24 text-right">
                  {(item.productPrice * item.quantity).toLocaleString()} RWF
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveFromCart(item.productId)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  title="Remove from cart"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="border-t border-gray-200 bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-simba-orange-500">
                {cartTotal.toLocaleString()} RWF
              </span>
            </div>
            
            <div className="flex space-x-4">
              <Link
                href="/products"
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-center hover:bg-gray-300 transition-colors"
              >
                Continue Shopping
              </Link>
              <button className="flex-1 bg-simba-orange-500 text-white py-3 px-6 rounded-lg hover:bg-simba-orange-600 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
