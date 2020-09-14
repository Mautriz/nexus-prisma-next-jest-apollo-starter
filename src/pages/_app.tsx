import { AppPropsType } from 'next/dist/next-server/lib/utils'
import '../styles/global.css'

import { createClient, Provider } from 'urql'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'
const client = createClient({
  url: '/api/graphql',
})

export default function App({ Component, pageProps }: AppPropsType) {
  return (
    <Provider value={client}>
      <ThemeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
