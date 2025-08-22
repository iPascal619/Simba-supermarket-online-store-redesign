'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, ArrowLeft, Package, ShoppingCart, Heart } from 'lucide-react'
import Header from '@/components/Header'
import WishlistButton from '@/components/WishlistButton'
import AddToCartButton from '@/components/AddToCartButton'

// 33 Categories with 50+ products each
const categories = [
  // Food & Beverages
  {
    id: "fresh-produce",
    name: "Fresh Produce",
    description: "Farm-fresh fruits and vegetables",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&crop=center",
    productCount: 85
  },
  {
    id: "meat-seafood",
    name: "Meat & Seafood", 
    description: "Premium quality meat and fresh seafood",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&crop=center",
    productCount: 72
  },
  {
    id: "dairy-eggs",
    name: "Dairy & Eggs",
    description: "Fresh dairy products and farm eggs",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop&crop=center",
    productCount: 68
  },
  {
    id: "bakery",
    name: "Bakery",
    description: "Freshly baked bread and pastries",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop&crop=center",
    productCount: 54
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Refreshing drinks and beverages",
    image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=300&fit=crop&crop=center",
    productCount: 96
  },
  {
    id: "snacks-confectionery",
    name: "Snacks & Confectionery",
    description: "Delicious snacks and sweet treats",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop&crop=center",
    productCount: 73
  },
  {
    id: "cereals-grains",
    name: "Cereals & Grains",
    description: "Rice, wheat, oats, and breakfast cereals",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&crop=center",
    productCount: 59
  },
  {
    id: "pasta-noodles",
    name: "Pasta & Noodles",
    description: "Italian pasta, Asian noodles, and sauces",
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400&h=300&fit=crop&crop=center",
    productCount: 65
  },
  {
    id: "canned-preserved",
    name: "Canned & Preserved Foods",
    description: "Long-lasting canned goods and preserves",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center",
    productCount: 67
  },
  {
    id: "frozen-foods",
    name: "Frozen Foods",
    description: "Frozen vegetables, meals, and ice cream",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
    productCount: 52
  },
  {
    id: "condiments-spices",
    name: "Condiments & Spices",
    description: "Seasonings, sauces, and cooking essentials",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&h=300&fit=crop&crop=center",
    productCount: 89
  },
  {
    id: "oils-vinegar",
    name: "Cooking Oils & Vinegar",
    description: "Premium cooking oils and vinegars",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop&crop=center",
    productCount: 54
  },
  // Health & Personal Care
  {
    id: "health-wellness",
    name: "Health & Wellness",
    description: "Vitamins, supplements, and health products",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    productCount: 76
  },
  {
    id: "personal-care",
    name: "Personal Care",
    description: "Skincare, haircare, and body care products",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center",
    productCount: 94
  },
  {
    id: "oral-care",
    name: "Oral Care",
    description: "Toothpaste, toothbrushes, and dental hygiene",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=300&fit=crop&crop=center",
    productCount: 58
  },
  {
    id: "feminine-care",
    name: "Feminine Care",
    description: "Women's health and hygiene products",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop&crop=center",
    productCount: 51
  },
  {
    id: "baby-care",
    name: "Baby Care",
    description: "Baby food, diapers, and care products",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
    productCount: 68
  },
  // Household
  {
    id: "cleaning-supplies",
    name: "Cleaning Supplies",
    description: "Detergents, disinfectants, and cleaning tools",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
    productCount: 87
  },
  {
    id: "laundry-care",
    name: "Laundry Care",
    description: "Washing powder, fabric softener, and care",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center",
    productCount: 63
  },
  {
    id: "paper-products",
    name: "Paper Products",
    description: "Toilet paper, tissues, and paper towels",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
    productCount: 59
  },
  {
    id: "air-fresheners",
    name: "Air Fresheners",
    description: "Room sprays, candles, and air care",
    image: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5d?w=400&h=300&fit=crop",
    productCount: 52
  },
  {
    id: "storage-organization",
    name: "Storage & Organization",
    description: "Containers, bags, and organizing solutions",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    productCount: 58
  },
  // Kitchen & Dining
  {
    id: "kitchen-tools",
    name: "Kitchen Tools",
    description: "Utensils, gadgets, and cooking equipment",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
    productCount: 81
  },
  {
    id: "cookware",
    name: "Cookware",
    description: "Pots, pans, and cooking vessels",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
    productCount: 67
  },
  {
    id: "tableware",
    name: "Tableware",
    description: "Plates, cups, and dining accessories",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68623?w=400&h=300&fit=crop",
    productCount: 75
  },
  {
    id: "food-storage",
    name: "Food Storage",
    description: "Containers, wraps, and preservation",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    productCount: 53
  },
  // Home & Garden
  {
    id: "home-decor",
    name: "Home Décor",
    description: "Decorative items and home accessories",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
    productCount: 62
  },
  {
    id: "gardening",
    name: "Gardening",
    description: "Plants, seeds, and garden tools",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
    productCount: 71
  },
  {
    id: "pest-control",
    name: "Pest Control",
    description: "Insecticides and pest management",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    productCount: 58
  },
  // Electronics & Tech
  {
    id: "small-appliances",
    name: "Small Appliances",
    description: "Blenders, toasters, and kitchen appliances",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
    productCount: 55
  },
  {
    id: "batteries-accessories",
    name: "Batteries & Accessories",
    description: "Batteries, chargers, and electronic accessories",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop&crop=center",
    productCount: 67
  },
  // Pets
  {
    id: "pet-food",
    name: "Pet Food",
    description: "Food and treats for dogs, cats, and pets",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center",
    productCount: 79
  },
  {
    id: "pet-care",
    name: "Pet Care",
    description: "Pet hygiene and care products",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center",
    productCount: 54
  },
  // Specialty
  {
    id: "organic-natural",
    name: "Organic & Natural",
    description: "Certified organic and natural products",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&crop=center",
    productCount: 86
  },
  {
    id: "international",
    name: "International Foods",
    description: "Imported and specialty international products",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&crop=center",
    productCount: 63
  }
]

// Sample products with cart/wishlist functionality
const sampleProducts = [
  {
    id: "1",
    name: "Organic Avocados",
    price: 2500,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=600&fit=crop",
    category: "fresh-produce",
    description: "Fresh organic avocados",
    rating: 4.5,
    stock: 50,
    nutritionalInfo: null
  },
  {
    id: "2", 
    name: "Premium Beef Steak",
    price: 8500,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=600&fit=crop",
    category: "meat-seafood",
    description: "Premium quality beef steak",
    rating: 4.8,
    stock: 25,
    nutritionalInfo: null
  },
  {
    id: "3",
    name: "Fresh Milk",
    price: 1200,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=600&fit=crop",
    category: "dairy-eggs",
    description: "Farm fresh whole milk",
    rating: 4.7,
    stock: 100,
    nutritionalInfo: null
  }
]

const totalProducts = categories.reduce((sum, cat) => sum + cat.productCount, 0)

export default function ProductsPageNew() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCategories = categories.filter(category => 
    !searchQuery || 
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
  }

  if (selectedCategory) {
    // Show products for selected category
    const category = categories.find(cat => cat.id === selectedCategory)
    
    return (
      <>
        <Header />
        
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back Button */}
            <button
              onClick={handleBackToCategories}
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Categories
            </button>

            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                <Image
                  src={category?.image || ''}
                  alt={category?.name || ''}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{category?.name}</h1>
                <p className="text-gray-600">{category?.description}</p>
                <p className="text-sm text-gray-500">{category?.productCount} products available</p>
              </div>
            </div>

            {/* Sample Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sampleProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Wishlist Button */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <WishlistButton 
                        product={product}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        RWF {product.price.toLocaleString()}
                      </span>
                      
                      <AddToCartButton
                        product={product}
                        className="flex items-center gap-1 px-3 py-1 text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover our wide selection of quality products across {categories.length} categories
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-orange-500" />
                <span>{totalProducts.toLocaleString()}+ Products</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-orange-500" />
                <span>{categories.length} Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-orange-500" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map(category => (
              <div 
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {category.productCount} products
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.productCount} items available
                    </span>
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <ArrowLeft className="w-4 h-4 text-orange-600 group-hover:text-white rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {searchQuery && filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No categories found
              </h3>
              <p className="text-gray-600">
                Try searching with different keywords.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
