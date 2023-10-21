'use client'

import { signOut } from 'next-auth/react'
import { Button } from './ui/button'

export default function SignOutButton() {
  return (
    <Button
      variant="destructive"
      onClick={() => {
        signOut()
      }}
    >
      Sign Out
    </Button>
  )
}
