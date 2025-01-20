import React, { useState, useContext } from "react";
import RecipeCard from "./RecipeCard";
import EditRecipe from "./EditRecipe";
import { Link } from "react-router-dom";

function RecipeList({ recipes, setRecipes, handleOpen, showSearchByCals}) {
  const [calorieLimit, setCalorieLimit] = useState("");
  const [addItem, setAddItem] = useState(false);
  const [addEditRecipe, setAddEditRecipe] = useState(0);

  const handleCalorieChange = (event) => {
    setCalorieLimit(event.target.value);
  };

  function deleteItem(id) {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  }

  function editRecipe(updatedRecipe) {
    let acopy = [...recipes];
    let nindex = 0;
    acopy.forEach((recipe, index) => {
      if (recipe.id === updatedRecipe.id) {
        nindex = index;
      }
    });
    console.log(nindex, updatedRecipe);
    const updatedRecipes = acopy.splice(nindex, 1, updatedRecipe);
    console.log(updatedRecipes);
    setRecipes(acopy);
    setAddItem(false);
  }

  function handleOpen(id) {
    let irecipe = {};
    recipes.map((item, index) => {
      if (item.id === id) {
        irecipe = item;
      }
    });
    setAddEditRecipe(irecipe);
    setAddItem(true);
  }

  return (
    <div className="recipe-list">
      {addItem && <EditRecipe recipe={addEditRecipe} editRecipe={editRecipe}/>}
      {showSearchByCals && <form class="bg-white shadow-md rounded py-2 px-3" style={{width: "600px", justifySelf: 'center', textAlign: "left"}}>
          <label htmlFor="calorieLimit">
            Search Recipes by Calorie Limit
              <input
                type="number"
                id="calorieLimit"
                value={calorieLimit}
                onChange={handleCalorieChange}
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                style={{background: 'white', color: 'black'}}/>
          </label>
      </form>}
      {recipes.filter((recipe) => {
    <div>
      {recipes
        ?.filter((recipe) => {
          if (calorieLimit === "") return true;
          return recipe.calories <= calorieLimit;
        }).map((recipe) => (
          <Link to={`recipe/${recipe.id}`} key={recipe.id}>
            <div className="inline">
              <RecipeCard
                {...recipe}
                deleteItem={deleteItem}
                handleOpen={handleOpen}
              />
            </div>
          </Link>
        ))}
    </div>
  );
}

export default RecipeList;
