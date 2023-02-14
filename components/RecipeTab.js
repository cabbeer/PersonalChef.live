// RecipesTab.js
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";

export default function RecipeTab({ recipes, onAdd, onRemove }) {
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
      <RecipeCard recipe={recipe} onAdd={onAdd} onRemove={onRemove} />
    </TabPanel>
  ))}
</TabPanels>
</Tabs>
);
}