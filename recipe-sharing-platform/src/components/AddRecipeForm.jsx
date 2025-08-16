// src/components/AddRecipeForm.jsx
import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({}); // ✅ error state

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";
    if (!image.trim()) newErrors.image = "Image URL is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors); // ✅ update errors

    if (Object.keys(validationErrors).length === 0) {
      // If no errors → save recipe
      const newRecipe = { title, ingredients, instructions, image };
      console.log("Recipe submitted:", newRecipe);
      // Reset form after submit
      setTitle("");
      setIngredients("");
      setInstructions("");
      setImage("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium">Ingredients</label>
          <textarea
            className="w-full p-2 border rounded mt-1"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-sm font-medium">Instructions</label>
          <textarea
            className="w-full p-2 border rounded mt-1"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
