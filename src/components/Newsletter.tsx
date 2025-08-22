'use client'

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-simba-orange-500 to-simba-secondary-500">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay Updated with Simba
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive deals, new product alerts, and fresh produce updates delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-simba-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              No spam, unsubscribe at any time. Privacy policy applies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
