import { Metadata } from 'next'
import MeatSeafoodPage from './components/MeatSeafoodPage'

export const metadata: Metadata = {
  title: 'Premium Meat & Seafood - Fresh Quality Cuts | Simba Supermarket',
  description: 'Premium quality meat and fresh seafood in Kigali. Grass-fed beef, free-range chicken, fresh fish daily.',
}

export default function MeatSeafood() {
  return <MeatSeafoodPage />
}
