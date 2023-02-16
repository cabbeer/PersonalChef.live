import React from "react";
import {
  Modal,
  Buttom,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Divider,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

import { Stack, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { InputRightElement } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";



const CreateRecipe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Box align="center" mu={4}>
        <Button onClick={onOpen}>Create A New Recipe Card +</Button>
        {/* <Button ml={4} ref={finalRef}>
        Receive focus on close
      </Button> */}

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your Recipe</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Recipe Title</FormLabel>
                <Input ref={initialRef} placeholder="Title" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Recipe Description</FormLabel>
                <Input placeholder="Description" />
              </FormControl>

              <Divider />
              <FormControl>
                <FormLabel>Cusine</FormLabel>
                <Select placeholder="Select country">
                  <option>All</option>
                  <option>Indian</option>
                  <option>Specialty</option>
                  <option>American</option>
                  <option>Southeast Asian</option>
                  <option>Southern</option>
                  <option>Mediterranean</option>
                  <option>Middle Eastern</option>
                  <option>Latin American</option>
                  <option>Italian</option>
                  <option>Pakistani</option>
                  <option>African</option>
                  <option>Mexican</option>
                  <option>Caribbean</option>
                  <option>Japanese</option>
                  <option>Chinese</option>
                </Select>
              </FormControl>
              <Divider />

              <Center height='50px'>

              <FormLabel>Price</FormLabel>
              <InputGroup>

                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="$"
                />
                <Input placeholder="Enter amount" />
                <InputRightElement />
              </InputGroup>






  <FormLabel>Price</FormLabel>
              <InputGroup>

                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="$"
                />
                <Input placeholder="Enter amount" />
                <InputRightElement />
              </InputGroup>




</Center>




            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default CreateRecipe;
