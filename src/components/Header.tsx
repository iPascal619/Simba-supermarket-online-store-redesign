'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useWishlist } from '@/contexts/WishlistContext'
import { useCart } from '@/contexts/CartContext'
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  HeartIcon,
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  PhoneIcon,
  ChevronDownIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'

export default function Header() {
  const { data: session } = useSession()
  const { wishlistCount } = useWishlist()
  const { cartCount } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)

  // Close dropdown when clicking outside
  const handleOutsideClick = () => {
    setIsAccountDropdownOpen(false)
  }

  const categories = [
    'Fresh Produce', 'Meat & Seafood', 'Dairy & Eggs', 'Bakery', 
    'Beverages', 'Snacks', 'Health & Beauty', 'Household'
  ]

  return (
    <>
      {/* Top Banner */}
      <div className="bg-simba-orange-500 text-white py-2 text-center text-sm">
        <div className="container-padding">
          🚚 Free delivery on orders over 50,000 RWF | 📞 Call: +250 788 123 456
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container-padding">
          {/* Top Header */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Simba</h1>
                <p className="text-sm text-gray-500">Supermarket</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className={`flex items-center w-full bg-gray-50 rounded-lg border-2 transition-all duration-200 ${
                isSearchFocused ? 'border-simba-orange-500 shadow-lg' : 'border-transparent'
              }`}>
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-700"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <button className="bg-simba-orange-500 hover:bg-simba-orange-600 text-white px-6 py-3 rounded-r-lg transition-colors duration-200">
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Location */}
              <div className="hidden lg:flex items-center space-x-2 text-gray-600">
                <MapPinIcon className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500">Deliver to</p>
                  <p className="text-sm font-medium">Kigali 12345</p>
                </div>
              </div>

              {/* Account */}
              <div className="relative">
                {session?.user ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                      className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-simba-orange-500 transition-colors"
                    >
                      <UserIcon className="w-6 h-6" />
                      <div className="text-left">
                        <p className="text-xs text-gray-500">Hello, {session.user.name?.split(' ')[0]}</p>
                        <p className="text-sm font-medium">Account & Lists</p>
                      </div>
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>

                    {/* Account Dropdown */}
                    {isAccountDropdownOpen && (
                      <>
                        {/* Overlay */}
                        <div 
                          className="fixed inset-0 z-40" 
                          onClick={() => setIsAccountDropdownOpen(false)}
                        />
                        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          <div className="px-4 py-3 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-900">{session.user.name}</p>
                            <p className="text-xs text-gray-600">{session.user.email}</p>
                          </div>
                          <div className="py-2">
                            <Link
                              href="/account"
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              onClick={() => setIsAccountDropdownOpen(false)}
                            >
                              <UserIcon className="w-4 h-4 mr-3" />
                              My Account
                            </Link>
                            <Link
                              href="/account/orders"
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              onClick={() => setIsAccountDropdownOpen(false)}
                            >
                              <ShoppingCartIcon className="w-4 h-4 mr-3" />
                              My Orders
                            </Link>
                            <Link
                              href="/account/wishlist"
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              onClick={() => setIsAccountDropdownOpen(false)}
                            >
                              <HeartIcon className="w-4 h-4 mr-3" />
                              Wishlist
                            </Link>
                            <button
                              onClick={() => {
                                setIsAccountDropdownOpen(false)
                                signOut()
                              }}
                              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              <ArrowRightOnRectangleIcon className="w-4 h-4 mr-3" />
                              Sign Out
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <Link href="/auth/signin" className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-simba-orange-500 transition-colors">
                    <UserIcon className="w-6 h-6" />
                    <div>
                      <p className="text-xs text-gray-500">Hello, Sign in</p>
                      <p className="text-sm font-medium">Account & Lists</p>
                    </div>
                  </Link>
                )}
              </div>

              {/* Wishlist */}
              <Link href="/wishlist" className="relative p-2 text-gray-600 hover:text-simba-orange-500 transition-colors">
                <HeartIcon className="w-6 h-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-simba-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link href="/cart" className="relative p-2 text-gray-600 hover:text-simba-orange-500 transition-colors">
                <ShoppingCartIcon className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-simba-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Categories Navigation */}
          <nav className="hidden md:flex items-center space-x-8 py-4">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-simba-orange-500 cursor-pointer transition-colors">
              <Bars3Icon className="w-5 h-5" />
              <span className="font-medium">All Categories</span>
            </div>
            <Link
              href="/fresh-produce"
              className="text-gray-700 hover:text-simba-orange-500 font-medium transition-colors duration-200"
            >
              Fresh Produce
            </Link>
            <Link
              href="/meat-seafood"
              className="text-gray-700 hover:text-simba-orange-500 font-medium transition-colors duration-200"
            >
              Meat & Seafood
            </Link>
            <Link
              href="/bakery"
              className="text-gray-700 hover:text-simba-orange-500 font-medium transition-colors duration-200"
            >
              Bakery
            </Link>
            <Link
              href="/category/dairy-eggs"
              className="text-gray-700 hover:text-simba-orange-500 font-medium transition-colors duration-200"
            >
              Dairy & Eggs
            </Link>
            <Link
              href="/category/beverages"
              className="text-gray-700 hover:text-simba-orange-500 font-medium transition-colors duration-200"
            >
              Beverages
            </Link>
            <Link
              href="/category/snacks"
              className="text-gray-700 hover:text-simba-orange-500 font-medium transition-colors duration-200"
            >
              Snacks
            </Link>
            <Link
              href="/category/household"
              className="text-gray-700 hover:text-simba-orange-500 font-medium transition-colors duration-200"
            >
              Household
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-simba-orange-500 font-medium transition-colors duration-200"
            >
              All Products
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container-padding py-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="flex items-center bg-gray-50 rounded-lg border">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="flex-1 px-4 py-3 bg-transparent focus:outline-none"
                  />
                  <button className="bg-simba-orange-500 text-white px-4 py-3 rounded-r-lg">
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-3">
                <Link href="/account" className="flex items-center space-x-3 py-2">
                  <UserIcon className="w-5 h-5 text-gray-600" />
                  <span>My Account</span>
                </Link>
                <Link href="/wishlist" className="flex items-center space-x-3 py-2">
                  <HeartIcon className="w-5 h-5 text-gray-600" />
                  <span>Wishlist</span>
                </Link>
                <div className="pt-2 border-t border-gray-200">
                  <p className="font-medium text-gray-900 mb-2">Categories</p>
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-2 text-gray-700"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
