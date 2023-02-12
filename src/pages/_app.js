// note: remove global styles ?(next boilerplate)
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
    )
}
