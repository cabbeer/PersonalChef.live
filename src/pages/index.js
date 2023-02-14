//to-do: remove fragments from return if not-needed

//NextJS Global Imports
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

//App: Component Imports
import { Auth } from 'components/Auth'
import { Navbar } from 'components/navbar'

//Page imports
import { Box, Container, Heading } from '@chakra-ui/react'



// ask mentor what this does and if i can delete it (react boilerplate)
// const inter = Inter({ subsets: ['latin'] })

const Page = () => {
  return (
    <>
    <Container>
      <Box borderRadius="lg" bg='red' p={3} mb={6} align="center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum magna nec nulla porta, non maximus quam condimentum. Curabitur et tincidunt ligula. Sed laoreet massa libero, eu elementum purus aliquam at. 
      </Box>
      <Box display={{md:`flex`}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
          Personal Chef
          </Heading>
        <p>Authentic dishes. Homemade. Delivered.</p>
        </Box>

      </Box>
    </Container>

    </>
  )
}

export default Page