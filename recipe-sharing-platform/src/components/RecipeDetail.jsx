import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center text-red-500">Recipe not found</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-6 p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Step 1: Do something important.</li>
            <li>Step 2: Continue with the process.</li>
            <li>Step 3: Finish and enjoy!</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default RecipeDetail;
