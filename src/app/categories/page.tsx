import { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '../../data/products'

export const metadata: Metadata = {
  title: 'Categories - Simba Supermarket',
  description: 'Browse all product categories at Simba Supermarket',
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h1>
          <p className="text-xl text-gray-600">
            Discover all the fresh products we have to offer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <span
                      key={sub}
                      className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full"
                    >
                      {sub}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{category.subcategories.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
