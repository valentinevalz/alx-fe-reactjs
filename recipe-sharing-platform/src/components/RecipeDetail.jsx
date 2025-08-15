import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

export default function RecipeDetail() {
  const { id } = useParams();
  const { recipes } = useRecipeStore();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg mb-4" />

      {/* Ingredients section */}
      <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc ml-5">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Instructions section */}
      <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
      <ol className="list-decimal ml-5">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
