import NextAuth, { InitOptions } from 'next-auth'
import Adapters from 'next-auth/adapters'
import Providers from 'next-auth/providers'
import { prismaClient } from '../../../../graphql/configs/prismaClient'

const options: any = {
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  database: process.env.DATABASE_URL,
  jwt: {
    encryption: true,
    // secret: process.env.AUTH_SECRET,
  },
  session: {
    jwt: true,
    updateAge: 1000 * 60 * 60 * 24,
  },
  secret: process.env.AUTH_SECRET,
  useSecureCookies: process.env.NODE_ENV === 'production',
  adapter: Adapters.Prisma.Adapter({ prisma: prismaClient }),
  debug: true,
  callbacks: {
    session(session, payload) {
      if (payload.account) session.user = payload.account
      return session
    },
    jwt(token, account, user, userInfo) {
      if (userInfo) token.account = userInfo
      return token
    },
  },
}

export default (req, res) => {
  return NextAuth(req, res, options)
}
