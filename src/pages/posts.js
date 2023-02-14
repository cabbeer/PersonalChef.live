import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import Layout from "components/layouts/article";
import Section from "components/section";
import { GridItem } from "components/grid-item";

//static images
import plate1 from "/public/images/content/plate1.jpg";
import plate2 from "/public/images/content/plate2.jpg";
import plate3 from "/public/images/content/plate3.jpg";

const Posts = () => {
return(
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>
  
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="How to build a portfolio website"
              thumbnail={plate1}
              href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
            />
            <GridItem
              title="How to take notes in Markdown efficiently with Inkdrop"
              thumbnail={plate1}
              href="https://www.youtube.com/watch?v=-qBavwqc_mY"
            />
            <GridItem
              title="My Fish workflow"
              thumbnail={plate1}
              href="https://www.youtube.com/watch?v=KKxhf50FIPI"
            />
            <GridItem
              title="My desk setup (Late 2020)"
              thumbnail={plate1}
              href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
            />
          </SimpleGrid>
        </Section>
  
        <Section delay={0.3}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo"
              thumbnail={plate1}
              href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
            />
            <GridItem
              title="I stopped setting a financial goal for my SaaS"
              thumbnail={plate1}
              href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
            />
          </SimpleGrid>
        </Section>
  
        <Section delay={0.5}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="How to Price Yourself as a Freelance Developer"
              thumbnail={plate1}
              href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
            />
            <GridItem
              title="I made my React Native app 50x faster"
              thumbnail={plate1}
              href="https://www.youtube.com/watch?v=vj723NlrIQc"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}
  export default Posts