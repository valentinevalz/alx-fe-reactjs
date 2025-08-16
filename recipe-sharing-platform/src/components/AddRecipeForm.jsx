// src/components/AddRecipeForm.jsx
import { useState } from "react";

export default function AddRecipeForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps,
    };

    if (onAdd) onAdd(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded p-2"
          rows="3"
          placeholder="Separate ingredients with commas"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border rounded p-2"
          rows="4"
          placeholder="Describe the preparation process..."
        />
        {errors.steps && (
          <p className="text-red-500 text-sm">{errors.steps}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
}
