import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Button,
  ButtonGroup,
  Image,
  Heading,
  Stack,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useDisclosure
} from "@chakra-ui/react";

export default function RecipeApp() {
  const [recipeData, setRecipeData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const recipeRes = await fetch(
        "http://127.0.0.1:8090/api/collections/recipes/records"
      );
      const recipeData = await recipeRes.json();
      setRecipeData(recipeData.items);
    }
    fetchData();
  }, []);

  const handleAddToCart = (recipe) => {
    const newCartItem = {
      id: recipe.id,
      title: recipe.title,
      price: recipe.price,
    };
    setCartItems([...cartItems, newCartItem]);
  };

  return (
    <div>
    <RecipesTab recipes={recipeData} onAdd={handleAddToCart} />
    <Basket cartItems={cartItems} onAdd={handleAddToCart}/>
  </div>
  );
}

function RecipesTab({ recipes, onAdd, onRemove }) {
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
            <RecipesCard recipe={recipe} onAdd={onAdd} onRemove={onRemove} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

function RecipesCard({ recipe, onAdd}) {
    const { description, price, quantity, img_1, id, title } =
    recipe || {};

  const handleAddToCart = () => {
    onAdd(recipe);
  };

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
          <Button onClick={handleAddToCart}>Add To Cart</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

function ShoppingCartApp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [cart, setCart] = useState([]);

  const onAdd = (item) => {
    setCart([...cart, item]);
  };

  const onRemove = (item) => {
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
            <Basket cartItems={cart} onAdd={onAdd} onRemove={onRemove}>
            </Basket>
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

function Basket({ cartItems, onAdd, onRemove }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

// There are several errors in the code:

// In the ShoppingCartApp component, the useDisclosure hook from Chakra UI is not imported.

// The onRemove prop is passed to the RecipesTab component but it is not used there.

// In the RecipesCard component, the quantity property is not extracted from the recipe object, causing an error when trying to set a max value for the NumberInput.

// In the Basket component, the name property is accessed on the item object, but the object only has id, title, and price properties.

// In the Basket component, the qty property is used instead of quantity when calculating the itemsPrice, causing an error because qty is not a property of the item object.

// In the Basket component, the onRemove prop is passed to the Basket component but it is not used there.