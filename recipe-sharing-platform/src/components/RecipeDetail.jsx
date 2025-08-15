// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json"; // ✅ Import data.json

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // ✅ Find recipe by ID from data.json
    const foundRecipe = recipesData.find(
      (recipeItem) => recipeItem.id.toString() === id
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-red-500">Recipe not found.</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>

      {/* ✅ Image */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* ✅ Ingredients */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">Ingredients</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ul>

      {/* ✅ Instructions */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions</h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions &&
          recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
      </ol>

      {/* ✅ Back link */}
      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Recipes
      </Link>
    </div>
  );
};

export default RecipeDetail;
