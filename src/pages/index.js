import NextLink from "next/link";
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
  chakra,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

//Custom components
import Section from "components/section";
import Layout from "components/layouts/article";
import Paragraph from "components/paragraph";
import { BioSection, BioYear } from "components/bio";
import { Auth } from "components/Auth";

// wayy too late changes
import { AvatarGroup } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";



// ask mentor what this does and if i can delete it (react boilerplate)
// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Container centerContent>
      <Section>
        {/* <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          <Auth/>
        </Box> */}
        <Box display={{ md: `flex` }}>
          <Box flexGrow={1}>
            <Heading as="h1" variant="page-title" align="center" size='3xl' >
              Personal Chef
            </Heading>
            <Heading size='md'>Authentic dishes. Homemade. Delivered.</Heading>
          </Box>
          {/* <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              border="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/text-logo.png"
              alt="logo"
            />
          </Box> */}
        </Box>
        </Section>
 
        <Section delay={0.1} centerContent>
        <Heading as="h3" variant="section-title" align="center">
            What is PersonalChef?
          </Heading>

          <BioSection align="center">
            <Heading as="h3" size='md'>
            It’s not just about making a profit, you see. 

            </Heading>
            

          </BioSection>

          </Section>
          <Section>
<BioSection  align="center">
<Heading as="h3" size='lg'>
            We're about something much bigger than that!

            </Heading>
</BioSection>
          
          
          <Paragraph>We're talking about connecting people, about bringing communities together. You might call us an online marketplace, but what we really are is a place where local cooks can find their footing and create something truly special.{''}
          {/* <NextLink href="/works">
            <Link>
              Link-Title
            </Link>
          </NextLink> */}
          </Paragraph>

        </Section>

        <Section delay={0.2} centerContent>
          <Heading as="h3" variant="section-title">
            Get Started Now!
          </Heading>

          <Box align="center" my={4}>
          <NextLink href="/browse">
            <Button rightIcon={<ChevronRightIcon/>}>
              Find-Food
            </Button>
          </NextLink>
          </Box>
          </Section>

          <Section></Section>
            <Heading as="h4">
              Local shefs are waiting!
            </Heading>
            {/* Lorem ipsum dolor sit amet */}


          <AvatarGroup size='md' max={5}>
  <Avatar name='Segun Adebayo' src='https://i.imgur.com/kBRFfEk.jpg' />
  <Avatar name='Kent Dodds' src='https://i.imgur.com/ML2oZo1.jpg' />
  <Avatar name='Prosper Otemuyiwa' src='https://i.imgur.com/P2mW3fq.jpg' />
  <Avatar name='Christian Nwamba' src='https://i.imgur.com/uVhCjKp.jpg' />
  <Avatar name='Christian Nwamba' src='https://i.imgur.com/6V36QD2.jpg' />
  <Avatar name='Christian Nwamba' src='https://i.imgur.com/6V36QD2.jpg' />
  <Avatar name='Christian Nwamba' src='https://i.imgur.com/6V36QD2.jpg' />
  <Avatar name='Christian Nwamba' src='https://i.imgur.com/6V36QD2.jpg' />
  <Avatar name='Christian Nwamba' src='https://i.imgur.com/6V36QD2.jpg' />
  <Avatar name='Christian Nwamba' src='https://i.imgur.com/6V36QD2.jpg' />
  <Avatar name='Christian Nwamba' src='https://i.imgur.com/6V36QD2.jpg' />

  <Avatar name='Christian Nwamba' src='https://i.imgur.com/6V36QD2.jpg' />


</AvatarGroup>













          {/* <BioSection>
            <BioYear>
              Step 1
            </BioYear>
            Lorem ipsum dolor sit amet
          </BioSection>
          <BioSection>
            <BioYear>
              Step 2
            </BioYear>
            Lorem ipsum dolor sit amet
          </BioSection> */}


        <Section delay={0.2} centerContent>
          <Heading as="h3" variant="section-title" >
            Accessible to everyone.
          </Heading>
          </Section>

          <Paragraph>
            Vegitarian, Vegan, Gluen Free,
            <Link href="https://cdn2.thecatapi.com/images/MTg3Nzk5MQ.jpg">
              Low Fodmap
            </Link>
          </Paragraph>






      </Container>
    </>
  );
};

export default Home;
