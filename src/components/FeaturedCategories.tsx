'use client'

import Link from 'next/link'

export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: "Fresh Produce",
      description: "Farm-fresh fruits and vegetables",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&crop=center",
      color: "from-green-400 to-green-600",
      items: "2,500+ items",
      href: "/fresh-produce"
    },
    {
      id: 2,
      name: "Meat & Seafood",
      description: "Premium quality meat and fresh seafood",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&crop=center",
      color: "from-red-400 to-red-600",
      items: "800+ items",
      href: "/meat-seafood"
    },
    {
      id: 3,
      name: "Dairy & Eggs",
      description: "Fresh dairy products and farm eggs",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop&crop=center",
      color: "from-blue-400 to-blue-600",
      items: "400+ items",
      href: "/category/dairy-eggs"
    },
    {
      id: 4,
      name: "Bakery",
      description: "Freshly baked bread and pastries",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop&crop=center",
      color: "from-yellow-400 to-orange-500",
      items: "300+ items",
      href: "/bakery"
    },
    {
      id: 5,
      name: "Beverages",
      description: "Refreshing drinks and beverages",
      image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=300&fit=crop&crop=center",
      color: "from-purple-400 to-purple-600",
      items: "1,200+ items",
      href: "/category/beverages"
    },
    {
      id: 6,
      name: "Snacks",
      description: "Delicious snacks and treats",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop&crop=center",
      color: "from-pink-400 to-pink-600",
      items: "900+ items",
      href: "/category/snacks"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover premium quality products across all categories. From fresh produce to household essentials, 
            we have everything you need for your daily life.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="card overflow-hidden">
                {/* Category Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-simba-orange-500/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      Browse {category.name}
                    </span>
                  </div>
                  
                  {/* Item Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    {category.items}
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-simba-orange-500 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-simba-orange-500 font-medium text-sm group-hover:text-simba-orange-600 transition-colors">
                    Shop Now
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link href="/products" className="btn-secondary text-lg px-8 py-4">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
