import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Simba Supermarket',
  description: 'Terms of service for Simba Supermarket online store',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Simba Supermarket's online store, you accept and agree to be 
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Products and Services
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All products are subject to availability</li>
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to limit quantities</li>
                <li>Product images are for illustration purposes only</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Orders and Payment
              </h2>
              <p className="text-gray-700 mb-4">
                All orders are subject to acceptance and availability. Payment must be received 
                before orders are processed and shipped.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Delivery Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We deliver within Kigali and surrounding areas. Delivery times may vary based on 
                location and product availability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Return Policy
              </h2>
              <p className="text-gray-700 mb-4">
                Fresh produce and perishable items cannot be returned. Other items may be returned 
                within 24 hours of delivery if unopened and in original condition.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700">
                For questions about these Terms of Service, please contact us at:
                <br />
                Email: support@simba-supermarket.rw
                <br />
                Phone: +250 788 123 456
                <br />
                Address: KN 4 Ave, Kigali, Rwanda
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
