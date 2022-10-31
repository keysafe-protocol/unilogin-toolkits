import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { createContext, useContext } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const { Provider } = createContext({})
  return <ChakraProvider>
    <Provider value={''}>
      <Component {...pageProps} />
    </Provider>
  </ChakraProvider>
}
