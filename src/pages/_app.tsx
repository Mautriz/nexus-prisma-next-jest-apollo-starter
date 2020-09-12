import { AppPropsType } from 'next/dist/next-server/lib/utils'
import '../styles/global.css'

import { withUrqlClient } from 'next-urql'
import { dedupExchange } from '@urql/core'
import { cacheExchange } from '@urql/exchange-graphcache'

function App({ Component, pageProps }: AppPropsType) {
  return <Component {...pageProps} />
}

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: '/api/graphql',
  exchanges: [dedupExchange, cacheExchange({})],
}))(App)
