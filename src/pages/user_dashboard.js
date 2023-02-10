import PocketBase from 'pocketbase';
import React, { useState, useEffect, useMemo } from 'react';
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

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
} from "@chakra-ui/react";

// fetches a list of users and displays the list of users.
export default function UserDashboard() {
  const [userData, setUserData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const userRes = await fetch(`http://127.0.0.1:8090/api/collections/users/records`);
      const userData = await userRes.json();
      setUserData(userData.items);

      const recipeRes = await fetch('http://127.0.0.1:8090/api/collections/receipes/records');
      const recipeData = await recipeRes.json();
      setRecipeData(recipeData.items);
    }
    fetchData();
  }, []);

return (
  <div>
    <h1>Users</h1>
      <ul>
        {userData.map(user => (
          <li key={user.id}>
            <User user={user} />
          </li>
        ))}
      </ul>
      <h1>Recipes</h1>
      <ul>
        <RecipesTab recipes={recipeData} />
      </ul>
      <ul>
        <Map />
      </ul>
      {/* <h1>ShoppingCart</h1>
      <ul>
        <ShoppingCart recipes={newRecipes} />
      </ul> */}
    </div>
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

function RecipesCard({ recipe }) {
  // const history = useHistory();
  const { description, price, quantity, img_1, id, title } = recipe || {};

  // const handleClick = () => {
  //   history.push('/shopping-cart');
  // };

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
          <Button variant="solid" colorScheme="blue">
            Add To Cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

function RecipesTab({ recipes }) {
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
            <RecipesCard recipe={recipe} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

// function ShoppingCart({}) {
//   const location = useLocation();

//   return (
//   console.log(location)
//   )
// }


//  function Map ({user}) {
//   const { lat, long } = user || {};
//   const myLatLng = { lat: lat, lng: long };
//   const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyDUH5yXVbJ8wCI9byJ1BlSTDiUhz5QIrY0"});
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   if(!isLoaded) {
//     return <div>loading bish</div>
//   }

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName={"map-container"}>
//       <Marker position={myLatLng}/>
//     </GoogleMap>
//   );
// };

const Map = ({ user }) => {
  // const { lat, long } = user || {};
  // const myLatLng = lat && long ? { lat, lng: long } : { lat: 44, lng: -80 };
  const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyDUH5yXVbJ8wCI9byJ1BlSTDiUhz5QIrY0"});

  if(!isLoaded) {
    return <div>loading bish</div>
  }

  return (
    <GoogleMap zoom={10} center={myLatLng} mapContainerClassName={"map-container"}>
      {/* <Marker position={myLatLng} /> */}
      <Marker position={lat: 44, lng: -80} />
    </GoogleMap>
  );
};