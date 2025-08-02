import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {recipes.map((recipe) => {
            const isFavorite = favorites.includes(recipe.id);
            return (
              <li
                key={recipe.id}
                style={{
                  marginBottom: '16px',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Link to={`/recipes/${recipe.id}`} style={{ fontWeight: 'bold', textDecoration: 'none' }}>
                    {recipe.title}
                  </Link>
                  <p style={{ margin: '4px 0' }}>{recipe.description}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(recipe.id)}
                  aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '20px',
                  }}
                >
                  {isFavorite ? '★' : '☆'}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
