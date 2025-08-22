'use client'

import { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { 
  User, 
  MapPin, 
  ShoppingBag, 
  Heart, 
  Settings, 
  LogOut,
  Edit3,
  Plus,
  Package,
  CreditCard,
  Bell,
  Shield,
  ChevronRight
} from 'lucide-react'
import ProfileSection from './ProfileSection'
import AddressSection from './AddressSection'

interface AccountDashboardProps {
  user: {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export default function AccountDashboard({ user }: AccountDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const menuItems = [
    {
      id: 'overview',
      label: 'Account Overview',
      icon: User,
      description: 'View your account summary'
    },
    {
      id: 'profile',
      label: 'Profile Settings',
      icon: Settings,
      description: 'Manage your personal information'
    },
    {
      id: 'addresses',
      label: 'Address Book',
      icon: MapPin,
      description: 'Manage delivery addresses'
    },
    {
      id: 'orders',
      label: 'Order History',
      icon: ShoppingBag,
      description: 'Track and view past orders'
    },
    {
      id: 'wishlist',
      label: 'Wishlist',
      icon: Heart,
      description: 'Your saved favorite items'
    },
    {
      id: 'payments',
      label: 'Payment Methods',
      icon: CreditCard,
      description: 'Manage payment options'
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      description: 'Email and SMS preferences'
    },
    {
      id: 'security',
      label: 'Security',
      icon: Shield,
      description: 'Password and security settings'
    }
  ]

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-orange-600">
                Simba Supermarket
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-orange-600">
                    {user.name ? getInitials(user.name) : 'U'}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {user.name || 'User'}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">
                    {user.name ? getInitials(user.name) : 'U'}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{user.name || 'User'}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-orange-50 text-orange-600 border border-orange-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                        activeTab === item.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Welcome Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Welcome back, {user.name?.split(' ')[0] || 'there'}! 👋
                  </h1>
                  <p className="text-gray-600">
                    Manage your account, track orders, and update your preferences.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Package className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Orders</p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <Heart className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Wishlist Items</p>
                        <p className="text-2xl font-bold text-gray-900">8</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Saved Addresses</p>
                        <p className="text-2xl font-bold text-gray-900">3</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Package className="w-5 h-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Order #12345 delivered</p>
                        <p className="text-xs text-gray-600">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Heart className="w-5 h-5 text-red-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Added 3 items to wishlist</p>
                        <p className="text-xs text-gray-600">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <User className="w-5 h-5 text-green-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Profile updated</p>
                        <p className="text-xs text-gray-600">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setActiveTab('orders')}
                      className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <ShoppingBag className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">View Orders</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('addresses')}
                      className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-900">Add Address</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Edit3 className="w-5 h-5 text-orange-600" />
                      <span className="font-medium text-gray-900">Edit Profile</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('wishlist')}
                      className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Heart className="w-5 h-5 text-red-600" />
                      <span className="font-medium text-gray-900">View Wishlist</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Section */}
            {activeTab === 'profile' && (
              <ProfileSection user={user} />
            )}

            {/* Address Section */}
            {activeTab === 'addresses' && (
              <AddressSection user={user} />
            )}

            {/* Placeholder for other tabs */}
            {activeTab !== 'overview' && activeTab !== 'profile' && activeTab !== 'addresses' && (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {(() => {
                    const activeItem = menuItems.find(item => item.id === activeTab)
                    const Icon = activeItem?.icon || User
                    return <Icon className="w-8 h-8 text-gray-400" />
                  })()}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {menuItems.find(item => item.id === activeTab)?.label}
                </h2>
                <p className="text-gray-600 mb-6">
                  {menuItems.find(item => item.id === activeTab)?.description}
                </p>
                <p className="text-sm text-gray-500">
                  This section is under development. Coming soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
