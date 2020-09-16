import { AppPropsType } from 'next/dist/next-server/lib/utils'
import '../styles/global.css'

import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { Provider } from 'next-auth/client'

export default function App({ Component, pageProps }: AppPropsType) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Provider session={pageProps.session} options={{}}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
