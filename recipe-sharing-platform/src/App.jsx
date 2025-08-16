import { useState } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import data from "./data.json";

function App() {
  const [recipes, setRecipes] = useState(data);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
