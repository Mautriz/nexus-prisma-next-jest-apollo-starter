interface BasePayload {
  id: number
}

export interface AccessTokenPayload extends BasePayload {
  username: string
}

export interface RefreshTokenPayload extends BasePayload {}
