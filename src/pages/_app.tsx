import { AppPropsType } from 'next/dist/next-server/lib/utils'
import '../styles/global.css'

import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { Provider } from 'next-auth/client'
import { customTheme } from '../chackra.theme'

const TEN_MINUTES = 1000 * 60 * 60 * 10
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7

export default function App({ Component, pageProps }: AppPropsType) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Provider session={pageProps.session} options={{ keepAlive: TEN_MINUTES, clientMaxAge: ONE_WEEK }}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
