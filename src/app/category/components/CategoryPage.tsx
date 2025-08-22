'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Grid, List, Star, ShoppingCart, Heart, Eye, Filter } from 'lucide-react'
import { products, brands, badges } from '../../../data/products'

interface CategoryPageProps {
  category: {
    id: string
    name: string
    description: string
    image: string
    subcategories: string[]
  }
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('name')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [priceRange, setPriceRange] = useState(10000)
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedBadges, setSelectedBadges] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)

  const categoryProducts = products.filter(product => product.category === category.id)

  const filteredProducts = useMemo(() => {
    let filtered = categoryProducts.filter(product => {
      // Subcategory filter
      if (selectedSubcategory && product.subcategory !== selectedSubcategory) {
        return false
      }

      // Price filter
      if (product.price > priceRange) {
        return false
      }

      // Brand filter
      if (selectedBrand && product.brand !== selectedBrand) {
        return false
      }

      // Badge filter
      if (selectedBadges.length > 0 && !selectedBadges.some(badge => product.badges.includes(badge))) {
        return false
      }

      // Rating filter
      if (minRating > 0 && product.rating < minRating) {
        return false
      }

      return true
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [categoryProducts, selectedSubcategory, priceRange, selectedBrand, selectedBadges, minRating, sortBy])

  const categoryBrands = [...new Set(categoryProducts.map(p => p.brand))]
  const categoryBadges = [...new Set(categoryProducts.flatMap(p => p.badges))]

  const toggleBadge = (badge: string) => {
    setSelectedBadges(prev => 
      prev.includes(badge) 
        ? prev.filter(b => b !== badge)
        : [...prev, badge]
    )
  }

  const formatPrice = (price: number) => {
    return `RWF ${price.toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Category Hero */}
      <div className="relative h-64 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <Link href="/products" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to All Products
            </Link>
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="text-xl text-white/90">{category.description}</p>
            <p className="text-white/80 mt-2">{categoryProducts.length} products available</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Subcategory Navigation */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-semibold mb-4">Browse by subcategory:</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSubcategory('')}
              className={`px-4 py-2 rounded-lg border ${
                selectedSubcategory === '' 
                  ? 'bg-orange-500 text-white border-orange-500' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              All {category.name}
            </button>
            {category.subcategories.map(subcategory => (
              <button
                key={subcategory}
                onClick={() => setSelectedSubcategory(subcategory)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedSubcategory === subcategory 
                    ? 'bg-orange-500 text-white border-orange-500' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {subcategory}
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="text-gray-600">
              Showing {filteredProducts.length} of {categoryProducts.length} products
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80 bg-white rounded-lg shadow-sm p-6 h-fit">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </h3>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>RWF 0</span>
                  <span>RWF {priceRange.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Brand</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="brand"
                    value=""
                    checked={selectedBrand === ''}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">All Brands</span>
                </label>
                {categoryBrands.map(brand => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="radio"
                      name="brand"
                      value={brand}
                      checked={selectedBrand === brand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Minimum Rating</h4>
              <div className="space-y-2">
                {[4, 3, 2, 1].map(rating => (
                  <label key={rating} className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={minRating === rating}
                      onChange={(e) => setMinRating(parseInt(e.target.value))}
                      className="mr-2"
                    />
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-sm">& up</span>
                    </div>
                  </label>
                ))}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    value={0}
                    checked={minRating === 0}
                    onChange={(e) => setMinRating(0)}
                    className="mr-2"
                  />
                  <span className="text-sm">All ratings</span>
                </label>
              </div>
            </div>

            {/* Features Filter */}
            <div>
              <h4 className="font-medium mb-3">Features</h4>
              <div className="space-y-2">
                {categoryBadges.map(badge => (
                  <label key={badge} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedBadges.includes(badge)}
                      onChange={() => toggleBadge(badge)}
                      className="mr-2"
                    />
                    <span className="text-sm">{badge}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Display */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                        {product.badges.slice(0, 2).map(badge => (
                          <span
                            key={badge}
                            className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                          <Heart className="w-4 h-4" />
                        </button>
                        <Link href={`/product/${product.id}`}>
                          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                            <Eye className="w-4 h-4" />
                          </button>
                        </Link>
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
                        <span className="text-sm text-gray-600 ml-1">
                          ({product.reviews})
                        </span>
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
                        
                        <button
                          disabled={!product.inStock}
                          className="flex items-center gap-1 px-3 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add
                        </button>
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
                        <h3 className="text-xl font-semibold text-gray-900">
                          {product.name}
                        </h3>
                        <div className="flex gap-2">
                          {product.badges.slice(0, 3).map(badge => (
                            <span
                              key={badge}
                              className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-3">
                        {product.description}
                      </p>

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

                        <span className="text-sm text-gray-500">
                          Brand: {product.brand}
                        </span>
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
                          
                          <button
                            disabled={!product.inStock}
                            className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                          >
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
