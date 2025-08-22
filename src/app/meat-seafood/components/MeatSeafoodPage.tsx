'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fish, Star, ShoppingCart, Heart, Award, Thermometer } from 'lucide-react'
import { products } from '../../../data/products'

export default function MeatSeafoodPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const meatSeafoodProducts = products.filter(product => product.category === 'meat-seafood')
  const categories = ['all', 'Beef', 'Chicken', 'Pork', 'Fish', 'Seafood']

  const filteredProducts = meatSeafoodProducts.filter(product => 
    selectedCategory === 'all' || product.subcategory === selectedCategory
  )

  const formatPrice = (price: number) => `RWF ${price.toLocaleString()}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Fish className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Meat & Seafood
            </h1>
            <p className="text-xl text-red-100 mb-6">
              The finest cuts and freshest seafood for your table
            </p>
            <div className="flex justify-center gap-8 text-red-100">
              <div className="text-center">
                <div className="text-2xl font-bold">Premium</div>
                <div className="text-sm">Quality Cuts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Fresh</div>
                <div className="text-sm">Daily Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Halal</div>
                <div className="text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quality Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold mb-2">Premium Grade</h3>
            <p className="text-gray-600 text-sm">Only the highest quality cuts and freshest seafood</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Thermometer className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Cold Chain</h3>
            <p className="text-gray-600 text-sm">Temperature controlled from farm to your door</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Fish className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Sustainable</h3>
            <p className="text-gray-600 text-sm">Responsibly sourced meat and sustainably caught seafood</p>
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
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-red-50 hover:border-red-300'
                }`}
              >
                {category === 'all' ? 'All Products' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-semibold mb-4">Our Quality Standards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Halal Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Grass-Fed Beef</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free-Range Chicken</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Fresh Daily</span>
            </div>
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
                      className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded"
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

                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-medium">Out of Stock</span>
                  </div>
                )}
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
                    <button 
                      disabled={!product.inStock}
                      className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                    >
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

        {/* Freshness Guarantee */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Freshness & Quality Guarantee</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            We guarantee the freshness and quality of all our meat and seafood. Every product is carefully 
            selected, properly stored, and delivered fresh to ensure the highest standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">-2°C</div>
              <div className="text-red-100">Cold Chain Maintained</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24hrs</div>
              <div className="text-red-100">Farm to Store</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-red-100">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
