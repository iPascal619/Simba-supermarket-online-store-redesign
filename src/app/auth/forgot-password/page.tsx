import { Metadata } from 'next'
import ForgotPasswordPage from './components/ForgotPasswordPage'

export const metadata: Metadata = {
  title: 'Reset Password - Simba Supermarket',
  description: 'Reset your Simba Supermarket account password. Enter your email to receive reset instructions.',
}

export default function ForgotPassword() {
  return <ForgotPasswordPage />
}
