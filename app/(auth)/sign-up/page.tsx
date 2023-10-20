'use client'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { UserAuthForm } from '@/components/user-auth-form'
import { Swords } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <div className="flex flex-col h-screen p-8">
      <div className="flex items-start justify-between">
        <Button
          variant="ghost"
          onClick={() => {
            router.back()
          }}
        >
          <Icons.leftArrow />
          Back
        </Button>
      </div>
      <div className="flex m-auto w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 items-center text-center">
          <Swords size={48} />
          <h1 className="text-2xl font-semibold tracking-tight">Get Started</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password to sign up
          </p>
        </div>
        <UserAuthForm buttonText="Sign Up" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Have an account?{' '}
          <Link
            href="/sign-in"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign In Now
          </Link>
        </p>
      </div>
    </div>
  )
}
