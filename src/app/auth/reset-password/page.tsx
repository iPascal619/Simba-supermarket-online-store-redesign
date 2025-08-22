import { Suspense } from 'react'
import ResetPasswordPage from './components/ResetPasswordPage'

function ResetPasswordPageWrapper() {
  return <ResetPasswordPage />
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordPageWrapper />
    </Suspense>
  )
}
