import { Box, Grid, SimpleGrid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

// export default function GridOption1() {

//   return (
//   <SimpleGrid columns={3} p={10} spacing={10} minChildWidth={200}>
//   <Box bg="white" h="200px" border="1px solid" />
//   <Box bg="white" h="200px" border="1px solid" />
//   <Box bg="white" h="200px" border="1px solid" />
//   <Box bg="white" h="200px" border="1px solid" />
//   <Box bg="white" h="200px" border="1px solid" />
//   <Box bg="white" h="200px" border="1px solid" />
//   </SimpleGrid>
//   );
// }

export default function GridOption2() {
  return (
    <Grid templateColumns='repeat(6, 1fr)' gap={6} bg={"gray"}>
      <GridItem as={"aside"} colSpan={1} bg={"purple"} minHeight={"100hv"} p={30}>
      <span>sidebar</span>
      </GridItem>
      <GridItem as={"main"} colSpan={5} p={40}>
      <span>sidebar</span>
      </GridItem>
    </Grid>
  )
}
