import { Metadata } from 'next'
import ProductsPage from './components/ProductsPage'

export const metadata: Metadata = {
  title: 'All Products - Simba Supermarket',
  description: 'Browse our complete selection of fresh groceries, household items, and more. Quality products at great prices.',
}

export default function Products() {
  return <ProductsPage />
}
