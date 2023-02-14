
import Logo from "./logo";
import NextLink from "next/link";
import {
  Box,
  Container,
  Link,
  useColorModeValue,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "WhiteAlpha.900");
  return (
    <Link 
        as={NextLink}
        href={href}
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#20203" : inactiveColor}
      >
        {children}
      </Link>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      syle={{ backdropFilter: "blur(10px" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo/>
            </Heading>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
