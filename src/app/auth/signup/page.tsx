import { Metadata } from 'next'
import SignUpPage from './components/SignUpPage'

export const metadata: Metadata = {
  title: 'Create Account - Simba Supermarket',
  description: 'Create your Simba Supermarket account and start shopping for fresh groceries with fast delivery in Kigali.',
}

export default function SignUp() {
  return <SignUpPage />
}
