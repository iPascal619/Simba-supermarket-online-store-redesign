import AccountDashboard from './components/AccountDashboard'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function AccountPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/auth/signin?callbackUrl=/account')
  }

  return <AccountDashboard user={session.user} />
}
