import React, { useState } from "react";
import RecipeList from "./../components/RecipeList";
import RecipeForm from "../components/RecipeForm";

function HomePage({ props }) {
  const [recipes, setRecipes] = useState(props);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <div className="home-page">
      <h1 className="text-3xl font-bold">My Recipes</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default HomePage;
