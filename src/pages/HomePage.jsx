import React, { useState } from "react";
import RecipeList from "./../components/RecipeList";
import RecipeForm from "../components/RecipeForm";
import SearchBox from "../components/SearchBar";

function HomePage({ props }) {
  const [originalRecipes] = useState(props);
  const [recipes, setRecipes] = useState(props);
  const [showForm, setShowForm] = useState(false);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes, newRecipe];
      originalRecipes.push(newRecipe);
      return updatedRecipes;
    });
    setShowForm(false);
  };

  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  function doSearch(e) {
    const searchStr = e.target.value.toLowerCase();

    if (searchStr.length > 0) {
      const filteredRecipes = originalRecipes.filter((food) =>
        food.name.toLowerCase().startsWith(searchStr)
      );
      setRecipes(filteredRecipes);
    } else {
      setRecipes(originalRecipes);
    }
  }

  return (
    <div className="home-page">
      <h1 className="text-3xl font-bold">My Recipes</h1>
      <button onClick={handleToggleForm}>
        {showForm ? "Hide Form" : "Add Recipe"}
      </button>

      {showForm && <RecipeForm addRecipe={addRecipe} />}

      <SearchBox doSearch={doSearch} />
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default HomePage;
