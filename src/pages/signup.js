import NextLink from "next/link";
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,


} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";

//theme components
import Logo from "components/logo";
import { OAuthButtonGroup } from "components/OAuthButtonGroup";
import { PasswordField } from "components/PasswordField";

//Custom components
import Section from "components/section";
import Layout from "components/layouts/article";
import Paragraph from "components/paragraph";
import { BioSection, BioYear } from "components/bio";

// ask mentor what this does and if i can delete it (react boilerplate)
// const inter = Inter({ subsets: ['latin'] })

const Signup = () => {
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
  <Stack spacing="8">

      <Box
        py={{
          base: '0',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '10',
        }}
        bg={{
          base: 'transparent',
          sm: 'bg-surface',
        }}
        boxShadow={{
          base: 'none',
          sm: 'md',
        }}
        borderRadius={{
          base: 'none',
          sm: 'xl',
        }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
          <FormControl>
              <FormLabel htmlFor="email">Username</FormLabel>
              <Input id="username" type="username" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button variant="primary">Sign up</Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                Great food awaits!
              </Text>
              <Divider />
            </HStack>
            {/* <OAuthButtonGroup /> */}
          </Stack>
        </Stack>
      </Box>
    </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
