// import React from "react";
// import {useState} from "react";
// import {
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   DrawerFooter,
//   Button,
//   useDisclosure
// } from "@chakra-ui/react";
// import Basket from "./Basket";

// export default function ShoppingCart({totalPrice}) {
//   const { isOpen, onOpen, onClose } = useDisclosure();


//   return (
//     <>
//       <Button ref={React.useRef()} colorScheme="teal" onClick={onOpen}>
//         Checkout
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement="right"
//         onClose={onClose}
//         finalFocusRef={React.useRef()}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Final Checkout</DrawerHeader>

//           <DrawerBody>
//             <Basket></Basket>
//           </DrawerBody>

//           <DrawerFooter>
//             <Button variant="outline" mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="blue">Confirm</Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }