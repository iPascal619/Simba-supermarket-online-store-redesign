'use client'

export default function Footer() {
  const footerSections = [
    {
      title: "Shop",
      links: [
        "Fresh Produce",
        "Meat & Seafood", 
        "Dairy & Eggs",
        "Bakery",
        "Beverages",
        "Snacks",
        "Health & Beauty",
        "Household"
      ]
    },
    {
      title: "Customer Service",
      links: [
        "Contact Us",
        "Help Center",
        "Order Tracking",
        "Returns & Refunds",
        "Delivery Info",
        "Store Locations"
      ]
    },
    {
      title: "Company",
      links: [
        "About Simba",
        "Careers",
        "Sustainability",
        "Press & Media",
        "Investor Relations",
        "Corporate Sales"
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Simba</h3>
                <p className="text-gray-400">Supermarket</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Rwanda's premier online supermarket delivering fresh, quality groceries 
              to your doorstep. Experience the convenience of world-class shopping.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-simba-orange-500 transition-colors">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-simba-orange-500 transition-colors">
                <span>📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-simba-orange-500 transition-colors">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-simba-orange-500 transition-colors">
                <span>💼</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-simba-orange-500 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-t border-gray-800">
        <div className="container-padding py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-simba-orange-500 rounded-lg flex items-center justify-center">
                <span>📍</span>
              </div>
              <div>
                <p className="font-medium">Store Location</p>
                <p className="text-gray-400 text-sm">KG 123 St, Kigali, Rwanda</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-simba-orange-500 rounded-lg flex items-center justify-center">
                <span>📞</span>
              </div>
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-gray-400 text-sm">+250 788 123 456</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-simba-orange-500 rounded-lg flex items-center justify-center">
                <span>✉️</span>
              </div>
              <div>
                <p className="font-medium">Email Us</p>
                <p className="text-gray-400 text-sm">hello@simbasupermarket.rw</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Simba Supermarket. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-simba-orange-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-simba-orange-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-simba-orange-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
