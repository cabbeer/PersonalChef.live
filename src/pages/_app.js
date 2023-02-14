// NOTE: Site entry point - DO NOTE EDIT PAGE!
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

//Setup React-Query
import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient()

//Components
import Layout from "../../components/layouts/Main"


const Website = ({ Component, pageProps, router}) => {
  return(
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route}/>
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
    )
}

export default Website