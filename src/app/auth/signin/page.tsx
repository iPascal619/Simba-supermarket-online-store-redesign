import { Metadata } from 'next'
import SignInPage from './components/SignInPage'

export const metadata: Metadata = {
  title: 'Sign In - Simba Supermarket',
  description: 'Sign in to your Simba Supermarket account to access your orders, wishlist, and personalized shopping experience.',
}

export default function SignIn() {
  return <SignInPage />
}
