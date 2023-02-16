import React from "react"
import { useDisclosure, Button, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalFooter } from "@chakra-ui/react"
import { ModalOverlay } from "@chakra-ui/react"
import { Auth } from "./Auth"
import { Link } from "@chakra-ui/react"

const NavbarModal = () => {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <>
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          SignIn
        </Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Welcome Back,</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Auth/>
            </ModalBody>
            <ModalFooter>
            <Link href="/dashboard"><Button onClick={onClose}>Close</Button></Link>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default NavbarModal;
