import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#002333',
      200: '#0d4c38',
      300: '#cad5e2',
      400: '#cff5ce',
      500: '#0d4c38',
    },
  },
  styles: {
    global: {
      h2: {
        fontWeight: '800',
      },
      h3: {
        fontWeight: '600',
      },
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
