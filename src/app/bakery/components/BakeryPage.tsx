'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Star, ShoppingCart, Heart, Cake } from 'lucide-react'
import { products } from '../../../data/products'

export default function BakeryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const bakeryProducts = products.filter(product => product.category === 'bakery')
  const categories = ['all', 'Bread', 'Pastries', 'Cakes', 'Cookies']

  const filteredProducts = bakeryProducts.filter(product => 
    selectedCategory === 'all' || product.subcategory === selectedCategory
  )

  const formatPrice = (price: number) => `RWF ${price.toLocaleString()}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Cake className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fresh Bakery
            </h1>
            <p className="text-xl text-amber-100 mb-6">
              Artisan breads and pastries baked fresh daily
            </p>
            <div className="flex justify-center gap-8 text-amber-100">
              <div className="text-center">
                <div className="text-2xl font-bold">6AM</div>
                <div className="text-sm">Fresh Daily</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Artisan</div>
                <div className="text-sm">Quality</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Local</div>
                <div className="text-sm">Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Baking Schedule */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            Fresh Baking Schedule
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex justify-between">
              <span>Fresh Bread</span>
              <span className="font-medium">6:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>Pastries & Croissants</span>
              <span className="font-medium">7:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>Cookies & Cakes</span>
              <span className="font-medium">9:00 AM</span>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-semibold mb-4">Browse by Category:</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-amber-50 hover:border-amber-300'
                }`}
              >
                {category === 'all' ? 'All Bakery Items' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                  {product.badges.slice(0, 2).map(badge => (
                    <span
                      key={badge}
                      className="px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <Link href={`/product/${product.id}`}>
                    <button className="flex items-center gap-1 px-3 py-1 bg-amber-500 text-white rounded-lg hover:bg-amber-600 text-sm">
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </button>
                  </Link>
                </div>

                <div className="mt-2 text-xs text-gray-500">
                  {product.weight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Artisan Promise */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Our Artisan Promise</h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Every item in our bakery is crafted with care using traditional techniques and the finest ingredients. 
            We bake fresh daily to ensure you get the best quality and taste.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">Daily</div>
              <div className="text-amber-100">Fresh Baked</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Artisan</div>
              <div className="text-amber-100">Crafted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Premium</div>
              <div className="text-amber-100">Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
