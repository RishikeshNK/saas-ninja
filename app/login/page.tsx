'use client'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { UserAuthForm } from '@/components/user-auth-form'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center h-screen p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="underline underline-offset-4 hover:text-primary"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
      <Button
        variant="ghost"
        className="absolute top-12 left-12"
        onClick={() => {
          router.back()
        }}
      >
        <Icons.leftArrow />
        Back
      </Button>
    </div>
  )
}
