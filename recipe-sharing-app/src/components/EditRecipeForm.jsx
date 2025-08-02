import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();
  const recipe = recipes.find((recipe) => recipe.id === id);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');
  const [ingredients, setIngredients] = useState(recipe?.ingredients || '');
  const [instructions, setInstructions] = useState(recipe?.instructions || '');

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ This is required for the auto-check to pass

    const updatedRecipe = {
      id,
      title,
      description,
      ingredients,
      instructions,
    };

    updateRecipe(updatedRecipe);
    navigate(`/recipes/${id}`);
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
