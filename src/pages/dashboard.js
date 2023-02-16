import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

import Layout from "components/layouts/article";
import Section from "components/section";
import { GridItem } from "components/grid-item";

//static images
import plate1 from "/public/images/content/plate1.jpg";
import plate2 from "/public/images/content/plate2.jpg";
import plate3 from "/public/images/content/plate3.jpg";
import plate4 from "/public/images/content/plate5.jpg";
import plate5 from "/public/images/content/plate4.jpg";

import thumbInkdrop from "/public/images/content/plate1.jpg";

//Custom components
import { WorkGridItem } from "components/grid-item";
import CreateRecipe from "components/create-recipe";
import { Stat } from "@chakra-ui/react";

const Dashboard = () => {
  const stats = [
    {
      label: 'Total Subscribers',
      value: '71,887',
    },
    {
      label: 'Avg. Open Rate',
      value: '56.87%',
    },
    {
      label: 'Avg. Click Rate',
      value: '12.87%',
    },
  ]


  return (
    <Layout title="Posts">

<Box
          as="section"
          py={{
            base: "4",
            md: "8",
          }}
        >
          <Container>
            <SimpleGrid
              columns={{
                base: 1,
                md: 3,
              }}
              gap={{
                base: "5",
                md: "6",
              }}
            >
              {stats.map(({ label, value }) => (
                <Stat key={label} label={label} value={value} />
              ))}
            </SimpleGrid>
          </Container>
        </Box>



      <Container>
      {/* Chef Dashboard Stats */}
        <CreateRecipe />

        <Heading as="h3" fontSize={20} mb={4}>
          Your recipies
        </Heading>

        {/* Print chef recipies: */}
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section>
            <WorkGridItem
              href="/"
              id="recipe-card"
              title="Leftover Pizza"
              thumbnail={plate1}
            >
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              href="/"
              id="recipe-card"
              title="Grilled Peaches"
              thumbnail={plate2}
            >
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              href="/"
              id="recipe-card"
              title="Par-fet"
              thumbnail={plate3}
            >
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        {/* Print chef recipies - row2: */}
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section>
            <WorkGridItem
              href="/"
              id="recipe-card"
              title="Contemporary American Poultry"
              thumbnail={plate4}
            >
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              href="/"
              id="recipe-card"
              title="Chicken n' Waffles"
              thumbnail={plate5}
            >
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
            </WorkGridItem>
          </Section>

          {/* <Section>
            <WorkGridItem href="/" id="recipe-card" title="Inkdrop" thumbnail={plate3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </WorkGridItem>
          </Section> */}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Dashboard;
