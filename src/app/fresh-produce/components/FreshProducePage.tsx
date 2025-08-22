'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Leaf, Star, ShoppingCart, Filter, Grid, List, Heart } from 'lucide-react'
import { products } from '../../../data/products'

export default function FreshProducePage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const freshProduceProducts = products.filter(product => product.category === 'fresh-produce')
  const subcategories = ['all', 'Fruits', 'Vegetables', 'Herbs', 'Organic']

  const filteredProducts = freshProduceProducts
    .filter(product => selectedSubcategory === 'all' || product.subcategory === selectedSubcategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price
        case 'price-high': return b.price - a.price
        case 'rating': return b.rating - a.rating
        default: return a.name.localeCompare(b.name)
      }
    })

  const formatPrice = (price: number) => `RWF ${price.toLocaleString()}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Leaf className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fresh Produce
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Farm-fresh fruits and vegetables delivered to your door
            </p>
            <div className="flex justify-center gap-8 text-green-100">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Fresh Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Local</div>
                <div className="text-sm">Sourced</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Daily</div>
                <div className="text-sm">Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Organic Options</h3>
            <p className="text-gray-600 text-sm">Certified organic produce from trusted farms</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">Hand-picked for freshness and quality</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Same Day Delivery</h3>
            <p className="text-gray-600 text-sm">Fresh produce delivered within hours</p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-semibold mb-4">Shop by Category:</h3>
          <div className="flex flex-wrap gap-2">
            {subcategories.map(subcategory => (
              <button
                key={subcategory}
                onClick={() => setSelectedSubcategory(subcategory)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedSubcategory === subcategory
                    ? 'bg-green-500 text-white border-green-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:border-green-300'
                }`}
              >
                {subcategory === 'all' ? 'All Produce' : subcategory}
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="text-gray-600">
              Showing {filteredProducts.length} products
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-green-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-green-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          badge === 'ORGANIC' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-orange-500 text-white'
                        }`}
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
                      <button className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm">
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
        ) : (
          <div className="space-y-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm p-6 flex gap-6">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex gap-2">
                      {product.badges.slice(0, 3).map(badge => (
                        <span
                          key={badge}
                          className={`px-2 py-1 text-xs font-medium rounded ${
                            badge === 'ORGANIC' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-orange-500 text-white'
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-3">{product.description}</p>

                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">Weight: {product.weight}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Heart className="w-5 h-5" />
                      </button>
                      
                      <Link href={`/product/${product.id}`}>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                          View Details
                        </button>
                      </Link>
                      
                      <button className="flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Freshness Guarantee */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Our Freshness Guarantee</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            We guarantee the freshness of all our produce. If you're not completely satisfied with the quality 
            of your fruits and vegetables, we'll replace them or give you a full refund.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">24hrs</div>
              <div className="text-green-100">Farm to Store</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-green-100">Satisfaction Guaranteed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Daily</div>
              <div className="text-green-100">Fresh Deliveries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
