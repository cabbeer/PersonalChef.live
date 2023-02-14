import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import Layout from "components/layouts/article";
import Section from "components/section";
import { GridItem } from "components/grid-item";

//static images
import plate1 from "/public/images/content/plate1.jpg";
import plate2 from "/public/images/content/plate2.jpg";
import plate3 from "/public/images/content/plate3.jpg";

const Posts = () => {
    return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Sample Dish 1"
              thumbnail={plate1}
              href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
            />
            <GridItem
              title="Sample Dish 2"
              thumbnail={plate2}
              href="https://www.youtube.com/watch?v=-qBavwqc_mY"
            />
            <GridItem
              title="Sample Dish 3"
              thumbnail={plate3}
              href="https://www.youtube.com/watch?v=KKxhf50FIPI"
            />
            <GridItem
              title="Sample Dish 4"
              thumbnail={plate1}
              href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};
  export default Posts;
