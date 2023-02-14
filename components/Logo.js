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
//add logo png here: 
const Logo = () => {
  const chefImg = `/public/images/logo${useColorModeValue('','-dark')}.png`
  return(
    //how do I do this without legcyBehavior??!?
    <Link legacyBehavior href="/">
      <a>
        <LogoBox>
          <Image src={chefImg} width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue('gray.800')}></Text>
        </LogoBox>
      </a>
    </Link>
  )
}


export default Logo