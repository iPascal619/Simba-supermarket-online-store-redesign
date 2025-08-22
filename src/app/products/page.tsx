import { Metadata } from 'next'
import ProductsPageNew from './components/ProductsPageNew'

export const metadata: Metadata = {
  title: 'All Products - Simba Supermarket',
  description: 'Browse our complete selection of fresh groceries, household items, and more. Quality products at great prices.',
}

export default function Products() {
  return <ProductsPageNew />
}
