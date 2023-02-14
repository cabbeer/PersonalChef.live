import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'

// ask mentor what this does and if i can delete it (react boilerplate)
// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          condimentum magna nec nulla porta, non maximus quam condimentum.
          Curabitur et tincidunt ligula. Sed laoreet massa libero, eu elementum
          purus aliquam at.
        </Box>
        <Box display={{ md: `flex` }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Personal Chef
            </Heading>
            <p>Authentic dishes. Homemade. Delivered.</p>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;