// RecipesTab.js
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard_Chef";

export default function RecipeTab({ recipes, onAdd, onRemove }) {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        {recipes.map((recipe) => (
          <Tab key={recipe.id}>{recipe.name}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {recipes.map((recipe) => (
          <TabPanel key={recipe.id}>
            <RecipeCard recipe={recipe} onAdd={onAdd} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
