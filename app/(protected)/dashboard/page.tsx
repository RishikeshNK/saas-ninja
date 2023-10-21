import SignOutButton from '@/components/sign-out-button'
import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function Page() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/sign-in')
  }

  return (
    <div className="flex grid place-items-center items-center pt-10 space-y-4">
      <h1 className="text-3xl font-semibold">Welcome, {user.name}</h1>
      <SignOutButton />
    </div>
  )
}
