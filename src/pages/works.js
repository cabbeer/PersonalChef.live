import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import thumbInkdrop from "/public/images/content/plate1.jpg";

//Custom components
import { WorkGridItem } from "components/grid-item";
import Section from "components/section";
import Layout from "components/layouts/article";

const Works = () => {
  return (
  <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Your Recipies/ Local Recipies
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section>
            <WorkGridItem href="/" id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
);
};

export default Works;
