import React, { useState } from "react";
import RecipeList from "./../components/RecipeList";
import RecipeForm from "../components/RecipeForm";
import SearchBox from "../components/SearchBar";

function HomePage({ props }) {
  const [recipes, setRecipes] = useState(props);
  const [showForm, setShowForm] = useState(false);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    setShowForm(false);
  };

  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  function doSearch(e) {
    //console.log(e.target.value);
    let searchstr = e.target.value;
    let searchStrlength = searchstr.length;
    const foodsCopy = [...recipes];
    const arr = [];
    const foodArr = foodsCopy.map((food) => {
      if (
        food.name.charAt(0).toLowerCase() === searchstr.charAt(0).toLowerCase()
      ) {
        if (
          food.name.toLowerCase().substring(0, searchStrlength) ===
          searchstr.toLowerCase()
        ) {
          arr.push(food);
        }
      }
    });
    // console.log(arr);
    if (searchStrlength > 0) {
      setRecipes(arr);
    } else {
      setRecipes(foodsCopy);
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
