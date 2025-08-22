import { Metadata } from 'next'
import CartPage from './components/CartPage'

export const metadata: Metadata = {
  title: 'Shopping Cart - Simba Supermarket',
  description: 'Review your items and proceed to checkout. Free delivery on orders over RWF 10,000.',
}

export default function Cart() {
  return <CartPage />
}
