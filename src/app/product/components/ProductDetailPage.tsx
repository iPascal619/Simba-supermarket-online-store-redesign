'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, Star, ShoppingCart, Heart, Share2, 
  Minus, Plus, Truck, Shield, RotateCcw, Award,
  ChevronLeft, ChevronRight
} from 'lucide-react'
import { products, categories } from '../../../data/products'

interface ProductDetailPageProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number
    category: string
    subcategory: string
    brand: string
    images: string[]
    rating: number
    reviews: number
    badges: string[]
    inStock: boolean
    weight: string
    nutritionalInfo?: {
      calories: number
      fat: number
      carbs: number
      protein: number
      fiber: number
    }
    features: string[]
  }
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  const category = categories.find(cat => cat.id === product.category)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const formatPrice = (price: number) => {
    return `RWF ${price.toLocaleString()}`
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1)
  }

  const totalPrice = product.price * quantity

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-gray-900">Products</Link>
          <span>/</span>
          <Link href={`/category/${product.category}`} className="hover:text-gray-900">
            {category?.name}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link 
          href={`/category/${product.category}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {category?.name}
        </Link>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                
                {/* Image Navigation */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white shadow-lg"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white shadow-lg"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 text-white text-sm rounded">
                    {selectedImageIndex + 1} / {product.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
                        selectedImageIndex === index 
                          ? 'border-orange-500' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {product.badges.map(badge => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Product Title & Brand */}
              <div>
                <p className="text-sm text-gray-600 mb-1">Brand: {product.brand}</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600">{product.weight}</p>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-lg font-medium ml-2">{product.rating}</span>
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <p className="text-green-600 font-medium">
                    You save {formatPrice(product.originalPrice - product.price)} 
                    ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                  </p>
                )}
              </div>

              {/* Stock Status */}
              <div>
                {product.inStock ? (
                  <p className="text-green-600 font-medium">✓ In Stock</p>
                ) : (
                  <p className="text-red-600 font-medium">✗ Out of Stock</p>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="font-medium">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decreaseQuantity}
                      className="p-2 hover:bg-gray-50"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="p-2 hover:bg-gray-50"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {quantity > 1 && (
                  <p className="text-gray-600">
                    Total: {formatPrice(totalPrice)}
                  </p>
                )}

                <div className="flex gap-4">
                  <button
                    disabled={!product.inStock}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  
                  <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Heart className="w-5 h-5" />
                  </button>
                  
                  <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Shipping & Guarantees */}
          <div className="border-t bg-gray-50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-orange-500" />
                <div>
                  <h4 className="font-medium">Free Delivery</h4>
                  <p className="text-sm text-gray-600">On orders over RWF 10,000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-orange-500" />
                <div>
                  <h4 className="font-medium">Quality Guarantee</h4>
                  <p className="text-sm text-gray-600">Fresh products guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-orange-500" />
                <div>
                  <h4 className="font-medium">Easy Returns</h4>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t">
            {/* Tab Navigation */}
            <div className="flex border-b">
              {[
                { id: 'description', label: 'Description' },
                { id: 'nutrition', label: 'Nutrition Facts' },
                { id: 'reviews', label: 'Reviews' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Product Details</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li><strong>Brand:</strong> {product.brand}</li>
                      <li><strong>Category:</strong> {category?.name}</li>
                      <li><strong>Subcategory:</strong> {product.subcategory}</li>
                      <li><strong>Weight/Size:</strong> {product.weight}</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'nutrition' && (
                <div>
                  {product.nutritionalInfo ? (
                    <div className="max-w-md">
                      <h4 className="font-semibold mb-4">Nutrition Facts (per serving)</h4>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="flex justify-between border-b pb-2">
                            <span>Calories</span>
                            <span className="font-medium">{product.nutritionalInfo.calories}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Fat</span>
                            <span>{product.nutritionalInfo.fat}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Carbohydrates</span>
                            <span>{product.nutritionalInfo.carbs}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Protein</span>
                            <span>{product.nutritionalInfo.protein}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fiber</span>
                            <span>{product.nutritionalInfo.fiber}g</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      Nutritional information not available for this product.
                    </p>
                  )}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{product.rating}</div>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">
                        {product.reviews} reviews
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-600">
                    <p>Customer reviews will be displayed here in a future update.</p>
                    <p className="mt-2">This product has received {product.reviews} reviews with an average rating of {product.rating} stars.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link 
                  key={relatedProduct.id} 
                  href={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(relatedProduct.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">
                        ({relatedProduct.reviews})
                      </span>
                    </div>
                    <div className="font-bold text-gray-900">
                      {formatPrice(relatedProduct.price)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
