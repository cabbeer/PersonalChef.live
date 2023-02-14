import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue, useColorMode, chakra } from "@chakra-ui/react";
import styled from "@emotion/styled";


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  paddingL: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`
//todo: add logo for dark mode
const Logo = () => {
  const chefImg = `/images/logo${useColorModeValue('','-dark')}.png`
  return (<Link href="/" scroll={false}>

  <LogoBox>
      <Image src={chefImg} width={20} height={20} alt="logo" />
    <Text
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      fontFamily='M PLUS Rounded 1c", sans-serif'
      fontWeight="bold"
      ml={3}
    >
      PersonalChef.live
    </Text>
  </LogoBox>
  
  </Link>)
}


export default Logo

