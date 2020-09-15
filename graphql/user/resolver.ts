import { schema } from 'nexus'
import { idArg, intArg, stringArg } from 'nexus/components/schema'
import * as jwt from 'jsonwebtoken'
import { config } from '../configs/config'
import Cookies from 'cookies'
import { verifyToken, setRefreshToken } from '../utils/authentication'

schema.objectType({
  name: 'AccessToken',
  definition(t) {
    t.string('accessToken')
  },
})

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('login', {
      type: 'AccessToken',
      args: {
        id: intArg(),
        username: stringArg(),
        password: stringArg(),
      },
      resolve(root, args, ctx, info) {
        const cookies = new Cookies(ctx.req, ctx.res, { secure: false })
        const { id, username, password } = args
        const accessToken = jwt.sign({ id, username, password }, config.access_token_secret, {
          expiresIn: '30m',
        })

        setRefreshToken({ id }, cookies)
        return { accessToken }
      },
    })

    t.field('refreshToken', {
      type: 'AccessToken',
      async resolve(root, args, ctx, info) {
        const cookies = new Cookies(ctx.req, ctx.res, { secure: false })
        const refreshToken = cookies.get('refreshToken')
        const payload = verifyToken(refreshToken, 'refresh')
        if (!payload) throw new Error('Refresh toke non valido')
        const user = await ctx.db.user.findOne({
          where: {
            id: payload.id,
          },
        })
        setRefreshToken(user, cookies)

        const accessToken = jwt.sign({ id: user.id, username: user.username }, config.access_token_secret, {
          expiresIn: '30m',
        })

        return { accessToken }
      },
    })
  },
})
