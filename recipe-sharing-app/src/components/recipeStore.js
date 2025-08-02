// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Sets the entire list of recipes
  setRecipes: (recipes) => set({ recipes }),

  // Adds a single new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
}));
