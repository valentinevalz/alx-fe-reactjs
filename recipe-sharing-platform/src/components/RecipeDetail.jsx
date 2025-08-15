import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        style={{ maxWidth: "300px", borderRadius: "8px" }}
      />
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;
