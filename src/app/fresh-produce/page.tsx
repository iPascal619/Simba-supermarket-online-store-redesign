import { Metadata } from 'next'
import FreshProducePage from './components/FreshProducePage'

export const metadata: Metadata = {
  title: 'Fresh Produce - Farm Fresh Fruits & Vegetables | Simba Supermarket',
  description: 'Shop the freshest fruits and vegetables in Kigali. Locally sourced, organic options available. Same-day delivery.',
}

export default function FreshProduce() {
  return <FreshProducePage />
}
