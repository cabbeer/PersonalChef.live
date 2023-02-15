import { useState, useEffect } from "react";
import { Grid, GridItem, Heading, } from "@chakra-ui/react";
import User from "./User";
import RecipeTab from "./RecipeTab";
import ShoppingCart from "./ShoppingCart";
import pb from "@/lib/pocketbase"

export default function UserDashboard() {
  const [recipeData, setRecipeData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState([]);

  const isLoggedIn = pb.authStore.isValid;

  // if(isLoggedIn && !isachef){

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

  const handleAddToCart = (recipe) => {
    const existingCartItemIndex = cartItems.findIndex((item) => item.title === recipe.title);
  
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].qty += 1;
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = {
        id: recipe.id,
        title: recipe.title,
        price: recipe.price,
        qty: 1,
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const handleRemoveFromCart = (item) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const existingCartItem = cartItems[existingCartItemIndex];
    let updatedCartItems;
    if (existingCartItem.qty === 1) {
      updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    } else {
      const updatedCartItem = {
        ...existingCartItem,
        qty: existingCartItem.qty - 1,
      };
      updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    }
    setCartItems(updatedCartItems);
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
      {/* <GridItem as={"aside"} colSpan={1} minHeight={"100hv"} p={5}>
        {userData.map((user) => (
          <ul key={user.id}>
            <User user={user} />
          </ul>
        ))}
      </GridItem> */}
      <GridItem as={"main"} colSpan={1} p={4}>
      <Heading as="h3" fontSize={20} mb={4}>Recipes</Heading>
        <ul>
          <RecipeTab
            recipes={recipeData}
            onAdd={handleAddToCart}
          />
        </ul>
        </GridItem>
        <GridItem as={"main"} colSpan={1} p={4}>
        <Heading as="h3" fontSize={15} mb={4}>ShoppingCart</Heading>
        <ul>
          <ShoppingCart
            cartItems={cartItems}
            onAdd={handleAddToCart}
            onRemove={handleRemoveFromCart}
          ></ShoppingCart>
        </ul>
      </GridItem>
    </Grid>
  );
        // }
}
// }