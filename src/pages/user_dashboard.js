import PocketBase from "pocketbase";
import React, { useState, useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Basket from "./Basket";

import {
  Flex,
  Avatar,
  Box,
  Text,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Grid,
  GridItem,
} from "@chakra-ui/react";

// fetches a list of users and displays the list of users.
export default function UserDashboard() {
  const [userData, setUserData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const { products } = recipeData;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  useEffect(() => {
    async function fetchData() {
      const userRes = await fetch(
        `http://127.0.0.1:8090/api/collections/users/records`
      );
      const userData = await userRes.json();
      setUserData(userData.items);

      const recipeRes = await fetch(
        "http://127.0.0.1:8090/api/collections/recipes/records"
      );
      const recipeData = await recipeRes.json();
      setRecipeData(recipeData.items);
    }
    fetchData();
  }, []);

  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={3}>
      <GridItem as={"aside"} colSpan={1} minHeight={"100hv"} p={10}>
        <h1>Users</h1>
        {userData.map((user) => (
          <ul key={user.id}>
            <User user={user} />
          </ul>
        ))}
      </GridItem>
      <GridItem as={"main"} colSpan={6} p={40}>
        <h1>Recipes</h1>
        <ul>
          <RecipesTab recipes={recipeData} onAdd={onAdd} />
        </ul>
        <h1>ShoppingCart</h1>
        <ul>
          <ShoppingCart cart={cartItems} onAdd={onAdd} />
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        </ul>
        <h1>Map</h1>
        <ul>
          <Map />
        </ul>
        <ul></ul>
      </GridItem>
    </Grid>
  );
}

// takes in a "user" object as a prop, destructures its properties, and returns a JSX representation of the user.
function User({ user }) {
  const { name, avatar, email, id } = user || {};

  return (
    <Flex>
      <Avatar
        src={`http://127.0.0.1:8090/api/files/_pb_users_auth_/${id}/${avatar}`}
      />
      <Box ml="3">
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm">{email}</Text>
      </Box>
    </Flex>
  );
}

function RecipesCard({ recipe,onAdd }) {
  const { description, price, quantity, img_1, id, title } =
    recipe || {};
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          boxSize="300px"
          src={`http://127.0.0.1:8090/api/files/rqlud957724mgg6/${id}/${img_1}`}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="l">
            {`Price: $${price}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Stack shouldWrapChildren direction="row">
          <NumberInput
            size="md"
            maxW={16}
            defaultValue={1}
            min={1}
            max={quantity}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Stack>
        <ButtonGroup spacing="3">
          <Button onClick={() => onAdd(recipe)}>Add To Cart</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

function RecipesTab({ recipes, onAdd }) {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>-</Tab>
        <Tab>-</Tab>
        <Tab>-</Tab>
      </TabList>
      <TabPanels>
        {recipes.map((recipe) => (
          <TabPanel key={recipe.id}>
            <RecipesCard recipe={recipe} onAdd={onAdd} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

function ShoppingCart({ recipe }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [cart, setCart] = useState([]);

  const onAdd = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Checkout
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Final Checkout</DrawerHeader>

          <DrawerBody>
          <RecipesTab recipe={recipe} onAdd={onAdd} />
            {cart.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
            {recipe}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Confirm</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDUH5yXVbJ8wCI9byJ1BlSTDiUhz5QIrY0",
  });

  if (!isLoaded) {
    return <div>loading bish</div>;
  }

  return (
    <GoogleMap
      zoom={8}
      center={{ lat: 43.7, lng: -79.6 }}
      mapContainerClassName={"map-container"}
    ></GoogleMap>
  );
}
