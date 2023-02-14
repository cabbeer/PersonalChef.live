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

// ask mentor what this does and if i can delete it (react boilerplate)
// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          <Auth/>
        </Box>
        <Box display={{ md: `flex` }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Personal Chef
            </Heading>
            <p>Authentic dishes. Homemade. Delivered.</p>
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
 
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            What is PersonalChef?
          </Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          condimentum magna nec nulla porta, non maximus quam condimentum.{''}
          <NextLink href="/works">
            <Link>
              Link-Title
            </Link>
          </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon/>}>
              Find-Food
            </Button>
          </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Get Started Now!
          </Heading>
          <BioSection>
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
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Accessible to everyone.
          </Heading>
          <Paragraph>
            Vegitarian, Vegan, Gluen Free,
            <Link href="https://cdn2.thecatapi.com/images/MTg3Nzk5MQ.jpg">
              Low Fodmap
            </Link>
          </Paragraph>
        </Section>

      </Container>
    </>
  );
};

export default Home;
