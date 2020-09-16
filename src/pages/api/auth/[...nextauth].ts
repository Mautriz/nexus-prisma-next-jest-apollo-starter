import NextAuth, { InitOptions } from 'next-auth'
import Adapters from 'next-auth/adapters'
import Providers from 'next-auth/providers'
import { prismaClient } from '../../../../graphql/configs/prismaClient'

const options: InitOptions = {
  // Configure one or more authentication providers
  providers: [],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
  //   adapter:
  jwt: {
    secret: process.env.AUTH_SECRET,
    maxAge: 1000 * 60 * 60 * 24,
  },
  secret: process.env.AUTH_SECRET,
  useSecureCookies: process.env.NODE_ENV === 'production',
  adapter: (Adapters as any).Prisma.Adapter({ prisma: prismaClient }),
}

export default (req, res) => NextAuth(req, res, options)
