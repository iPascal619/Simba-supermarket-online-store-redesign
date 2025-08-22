'use client'

import WishlistButton from './WishlistButton'
import AddToCartButton from './AddToCartButton'

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Organic Avocados",
      price: 2500,
      originalPrice: 3000,
      category: "Fresh Produce",
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 124,
      badge: "ORGANIC",
      inStock: true
    },
    {
      id: 2,
      name: "Premium Beef Steak",
      price: 8500,
      originalPrice: null,
      category: "Meat & Seafood",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 89,
      badge: "PREMIUM",
      inStock: true
    },
    {
      id: 3,
      name: "Fresh Milk (1L)",
      price: 1200,
      originalPrice: 1400,
      category: "Dairy & Eggs",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 256,
      badge: "FRESH",
      inStock: true
    },
    {
      id: 4,
      name: "Artisan Bread Loaf",
      price: 800,
      originalPrice: null,
      category: "Bakery",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 78,
      badge: "ARTISAN",
      inStock: true
    },
    {
      id: 5,
      name: "Rwanda Coffee Beans",
      price: 4500,
      originalPrice: 5200,
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 167,
      badge: "LOCAL",
      inStock: true
    },
    {
      id: 6,
      name: "Premium Mixed Nuts",
      price: 3200,
      originalPrice: 3800,
      category: "Snacks",
      image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop&crop=center",
      rating: 4.5,
      reviews: 92,
      badge: "PREMIUM",
      inStock: true
    },
    {
      id: 7,
      name: "Fresh Bananas (1kg)",
      price: 1500,
      originalPrice: null,
      category: "Fresh Produce",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop&crop=center",
      rating: 4.4,
      reviews: 203,
      badge: "FRESH",
      inStock: true
    },
    {
      id: 8,
      name: "Whole Chicken (1.5kg)",
      price: 6800,
      originalPrice: 7500,
      category: "Meat & Seafood",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 156,
      badge: "FRESH",
      inStock: true
    },
    {
      id: 9,
      name: "Chocolate Cookies",
      price: 2200,
      originalPrice: null,
      category: "Snacks",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 89,
      badge: "POPULAR",
      inStock: true
    }
  ]

  const formatPrice = (price: number) => {
    // Simple, consistent formatting that works the same on server and client
    return `RWF ${price.toLocaleString('en-US')}`
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular products, handpicked for quality and freshness. 
            From local favorites to international brands.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group card overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Product Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    product.badge === 'ORGANIC' ? 'bg-green-500' :
                    product.badge === 'PREMIUM' ? 'bg-purple-500' :
                    product.badge === 'FRESH' ? 'bg-blue-500' :
                    product.badge === 'ARTISAN' ? 'bg-orange-500' :
                    product.badge === 'LOCAL' ? 'bg-red-500' :
                    product.badge === 'POPULAR' ? 'bg-pink-500' : 'bg-gray-500'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <div className="absolute top-4 right-4">
                  <WishlistButton
                    product={{
                      id: product.id.toString(),
                      name: product.name,
                      price: product.price,
                      image: product.image
                    }}
                    size="md"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-simba-orange-500 font-medium">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-simba-orange-500 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                {product.inStock ? (
                  <AddToCartButton
                    product={{
                      id: product.id.toString(),
                      name: product.name,
                      price: product.price,
                      image: product.image
                    }}
                    className="w-full py-3 px-4 rounded-lg font-medium transition-all duration-200"
                  />
                ) : (
                  <button
                    disabled
                    className="w-full py-3 px-4 rounded-lg font-medium bg-gray-300 text-gray-500 cursor-not-allowed"
                  >
                    Out of Stock
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-4">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
