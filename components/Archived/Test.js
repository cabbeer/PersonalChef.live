// App.js
import { useEffect, useState } from "react";
import RecipesTab from "./RecipesTab";
import ShoppingCartApp from "./ShoppingCartApp";

export default function App() {
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
<ShoppingCartApp cartItems={cartItems} onAdd={handleAddToCart} />
</div>
);
}

// RecipesTab.js
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import RecipesCard from "./RecipesCard";

export default function RecipesTab({ recipes, onAdd, onRemove }) {
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

// RecipesCard.js
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
NumberInput,
NumberInputField,
NumberInputStepper,
NumberIncrementStepper,
NumberDecrementStepper,
} from "@chakra-ui/react";

export default function RecipesCard({ recipe, onAdd }) {
const { description, price, quantity, img_1, id, title } = recipe || {};

const handleAddToCart = () => {
onAdd(recipe);
};

return (
<Card maxW="sm">
<CardBody>
<Image
boxSize="300px"
src={http://127.0.0.1:8090/api/files/rqlud957724mgg6/${id}/${img_1}}
borderRadius="lg"
/>
<Stack mt="6" spacing="3">
<Heading size="md">{title}</Heading>
<Text>{description}</Text>
<Text color="blue.600" fontSize="l">
{Price: $${price}}
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