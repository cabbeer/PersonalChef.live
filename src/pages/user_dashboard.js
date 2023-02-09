import PocketBase from 'pocketbase';
import React, { useState, useEffect } from 'react';


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
        {recipeData.map(recipe => (
          <li key={recipe.id}>
            <Recipes recipe={recipe} />
          </li>
        ))}
      </ul>
  </div>
);
}

// takes in a "user" object as a prop, destructures its properties, and returns a JSX representation of the user.
function User({user}) {
const { name, avatar, email, id } = user || {};

return (
  <div>
    <h2>{name}</h2>
    <img src={`http://127.0.0.1:8090/api/files/_pb_users_auth_/${id}/${avatar}`} alt={`Avatar for ${name}`} />
    {/* <p>{email}</p> */}
  </div>
);
}

function Recipes({recipe}) {
  const {description, price, quantity} = recipe || {};

  return(
    <div>
      <h2>{description}</h2>
      <ul>{`Price: $${price}`}</ul>
      <ul>{`Quantity: ${quantity}`}</ul>
    </div>
  )
}

