import React from "react";
import UserDashboard from "components/UserDashboard";

// fetches a list of users and displays the list of users.
export default function User_Dashboard() {
  // const [userData, setUserData] = useState([]);
  // const [recipeData, setRecipeData] = useState([]);
  // const  products  = recipeData;
  // const [cartItems, setCartItems] = useState([]);
  // const onAdd = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }]);
  //   }
  // };
  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };
  // useEffect(() => {
  //   async function fetchData() {
  //     const userRes = await fetch(
  //       `http://127.0.0.1:8090/api/collections/users/records`
  //     );
  //     const userData = await userRes.json();
  //     setUserData(userData.items);

  //     const recipeRes = await fetch(
  //       "http://127.0.0.1:8090/api/collections/recipes/records"
  //     );
  //     const recipeData = await recipeRes.json();
  //     setRecipeData(recipeData.items);
  //   }
  //   fetchData();
  // }, []);

  return (
    <UserDashboard></UserDashboard>
  );
}
