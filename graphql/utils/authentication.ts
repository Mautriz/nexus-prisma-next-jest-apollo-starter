import * as jwt from 'jsonwebtoken'
import { config } from '../configs/config'
import { RefreshTokenPayload, AccessTokenPayload } from '../user/objects'
import Cookies from 'cookies'
export const verifyToken = <V extends 'access' | 'refresh'>(
  token: string,
  tokenType: V
): V extends 'refresh' ? RefreshTokenPayload : V extends 'access' ? AccessTokenPayload : any => {
  const secret = tokenType === 'access' ? config.access_token_secret : config.refresh_token_secret
  try {
    if (isAccess(tokenType)) {
      return jwt.verify(token, secret) as any
    } else if (isRefresh(tokenType)) {
      return jwt.verify(token, secret) as any
    }
  } catch {
    return undefined
  }
}

function isAccess(token: string): token is 'access' {
  return token === 'access'
}

function isRefresh(token: string): token is 'refresh' {
  return token === 'refresh'
}

export function setRefreshToken({ id }: { id: number }, cookies: Cookies) {
  const refreshToken = jwt.sign({ id }, config.access_token_secret, { expiresIn: '7d' })
  cookies.set('refreshToken', refreshToken, { path: '/api/graphql', httpOnly: true, secure: false })
}
