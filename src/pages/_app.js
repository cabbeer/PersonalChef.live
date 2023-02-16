'use client'
// NOTE: Site entry point - DO NOTE EDIT PAGE!
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from 'components/fonts'
import theme from '@/lib/theme'
import { AnimatePresence } from 'framer-motion'

//Setup React-Query
import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient()

//Components
import Layout from "../../components/layouts/Main"


const Website = ({ Component, pageProps, router}) => {
  return(
    <ChakraProvider theme={theme}>
    <Fonts/>
      <QueryClientProvider client={queryClient}>
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
    )
}

export default Website