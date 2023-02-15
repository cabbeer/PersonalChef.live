import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import thumbInkdrop from "/public/images/content/plate1.jpg";

//Custom components
import { WorkGridItem } from "components/grid-item";
import Section from "components/section";
import Layout from "components/layouts/article";

import UserDashboard from "components/UserDashboard";

const Browse = () => {
  return (
  <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Browse Local Recipies
        </Heading>

      <UserDashboard/>

      </Container>
    </Layout>
);
};

export default Browse;
