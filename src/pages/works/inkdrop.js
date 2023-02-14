import { Chakra } from "chakra";
import {Container, Badge,  Link, List, ListItem, AspectRatio } from '@chakra-ui/react'
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "components/work";
import P from '../../../components/paragraph'
import Layout from "components/layouts/article";

const Work = () => {
    return(
        <Layout title="Inkdrop">
            <Container>
                <Title>
                    Inkdrop <Badge>1991</Badge>
                </Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        https://www.inkdrop.app/ <ExternalLinkIcon mx="2px"/>
                    </ListItem>

                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/Mac/Linux/iOS</span>
                    </ListItem>

                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Electron, React Native</span>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.inkdrop.app/">
                        https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work