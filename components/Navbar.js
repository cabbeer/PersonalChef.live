import Logo from "./logo"
import NextLink from "next/link"
import Link from "next/link"
import { Box, Container, useColorModeValue } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"


const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'WhiteAlpha.900')
    return(
        <NextLink href={href}>
            <Link
            p={2}
            bg={active ? "glassTeal": undefined}
            color={active ? '#20203' : inactiveColor}
            >
            {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return(
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue("#ffffff40", "#20202380")}
        syle={{backdropFilter:"blur(10px"}}
        zIndex={1}
        {...props}
        >
        Navbar
        </Box>

    )
}