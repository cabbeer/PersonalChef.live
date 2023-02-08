import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [userData, setUserData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const userRes = await fetch('http://127.0.0.1:8090/api/collections/users/records');
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
            {user.name}
          </li>
        ))}
      </ul>
      <h1>Recipes</h1>
      <ul>
        {recipeData.map(recipe => (
          <li key={recipe.id}>
            {recipe.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;