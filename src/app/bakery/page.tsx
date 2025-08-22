import { Metadata } from 'next'
import BakeryPage from './components/BakeryPage'

export const metadata: Metadata = {
  title: 'Fresh Bakery - Artisan Bread & Pastries | Simba Supermarket',
  description: 'Freshly baked bread, pastries, and cakes made daily. Artisan quality bakery items in Kigali.',
}

export default function Bakery() {
  return <BakeryPage />
}
