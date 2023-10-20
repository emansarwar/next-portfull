import '@/styles/globals.css'
// import  {ChakraProvider}  from '@chakra-ui/react'
import type { AppProps } from 'next/app'

// import theme from '../Config/theme'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  }
