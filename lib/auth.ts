import { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import GitHubProvider from 'next-auth/providers/github'
import { prisma } from '@/lib/prisma'

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
      httpOptions: {
        timeout: 40000,
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? '',
  adapter: PrismaAdapter(prisma),
}
