import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => r.id === id);

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  useEffect(() => {
    if (!recipe) {
      // if recipe not found, redirect home or show not found
      navigate('/');
    }
  }, [recipe, navigate]);

  if (!recipe) return null;

  const isFavorite = favorites.includes(recipe.id);
  const toggleFavorite = () => {
    if (isFavorite) removeFavorite(recipe.id);
    else addFavorite(recipe.id);
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <button
        onClick={toggleFavorite}
        aria-label={isFavorite ? 'Unfavorite recipe' : 'Favorite recipe'}
        style={{
          fontSize: '24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '8px',
        }}
      >
        {isFavorite ? '★ Unfavorite' : '☆ Favorite'}
      </button>

      <p><strong>Description:</strong> {recipe.description}</p>
      <div>
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>
      </div>
      <div>
        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>

      <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
        <Link to={`/edit/${recipe.id}`}>
          <button>Edit Recipe</button>
        </Link>
        <DeleteRecipeButton id={recipe.id} />
        <Link to="/">
          <button>Back to List</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
