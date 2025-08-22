'use client'

import Link from 'next/link'
import { ChevronRightIcon, ShoppingBagIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const features = [
    {
      icon: <TruckIcon className="w-6 h-6" />,
      title: "Free Delivery",
      description: "On orders over 50,000 RWF"
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "30 Min Delivery",
      description: "Within Kigali city"
    },
    {
      icon: <ShoppingBagIcon className="w-6 h-6" />,
      title: "Fresh Guarantee",
      description: "100% fresh products"
    }
  ]

  return (
    <section className="relative bg-gradient-to-r from-simba-orange-50 to-simba-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-simba-orange-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-simba-secondary-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-simba-orange-500 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-simba-secondary-500 rounded-full"></div>
      </div>

      <div className="relative container-padding py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-simba-orange-600 border border-simba-orange-200">
                <span className="w-2 h-2 bg-simba-orange-500 rounded-full mr-2 animate-pulse"></span>
                Now delivering across Kigali
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Premium 
                <span className="text-gradient block">Groceries</span>
                Delivered Fresh
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Experience world-class grocery shopping with Simba Supermarket. 
                Fresh produce, quality brands, and lightning-fast delivery to your doorstep.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/shop" 
                className="btn-primary text-lg px-8 py-4 group inline-flex items-center justify-center"
              >
                Start Shopping
                <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/categories" 
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                Browse Categories
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-simba-orange-500 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-[4/5] relative">
                {/* Hero Product Image */}
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=750&fit=crop&crop=center"
                  alt="Fresh Groceries"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-simba-orange-900/50 via-transparent to-transparent"></div>
                
                {/* Product Showcase Cards */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <img
                        src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=60&h=60&fit=crop&crop=center"
                        alt="Organic Avocados"
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">Organic Avocados</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-simba-orange-500 font-bold">RWF 2,500</span>
                          <div className="flex text-yellow-400">
                            ⭐⭐⭐⭐⭐
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-simba-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg animate-bounce-subtle">
                <span className="font-bold">50%</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-float">
                <ShoppingBagIcon className="w-8 h-8 text-simba-orange-500" />
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-simba-orange-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-simba-secondary-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}
