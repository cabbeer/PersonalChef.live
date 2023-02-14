import { useState, useEffect } from "react";
import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import User from "./User";
import RecipeTab from "./RecipeTab";
import ShoppingCart from "./ShoppingCart";
import pb from "@/lib/pocketbase"

export default function UserDashboard() {
  const [recipeData, setRecipeData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    const newCartItem = {
      id: recipe.id,
      title: recipe.title,
      price: recipe.price,
      qty: 1,
    };
    setCartItems([...cartItems, newCartItem]);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

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
          <RecipeTab
            recipes={recipeData}
            onAdd={handleAddToCart}
            onRemove={handleRemoveFromCart}
          />
        </ul>
        <h1>ShoppingCart</h1>
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