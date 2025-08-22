import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Simba Supermarket - Premium Online Shopping in Kigali',
  description: 'Shop premium groceries, fresh produce, and everyday essentials at Simba Supermarket. Fast delivery across Kigali, Rwanda. Quality products at competitive prices.',
  keywords: ['supermarket', 'grocery', 'Kigali', 'Rwanda', 'online shopping', 'delivery', 'fresh produce'],
  authors: [{ name: 'Simba Supermarket' }],
  creator: 'Simba Supermarket',
  publisher: 'Simba Supermarket',
  openGraph: {
    title: 'Simba Supermarket - Premium Online Shopping',
    description: 'Shop premium groceries and essentials with fast delivery in Kigali',
    type: 'website',
    locale: 'en_RW',
    url: 'https://simbasupermarket.rw',
    siteName: 'Simba Supermarket',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simba Supermarket - Premium Online Shopping',
    description: 'Shop premium groceries and essentials with fast delivery in Kigali',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-50">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
