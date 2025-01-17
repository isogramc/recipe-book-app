import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

function RecipeList({ recipes, setRecipes }) {
  const [calorieLimit, setCalorieLimit] = useState("");

  const handleCalorieChange = (event) => {
    setCalorieLimit(event.target.value);
  };

  function deleteItem(id) {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  }

  return (
    <div>
      <form>
        <label htmlFor="calorieLimit">Calorie Limit: </label>
        <input
          type="number"
          id="calorieLimit"
          value={calorieLimit}
          onChange={handleCalorieChange}
        />
      </form>

      {recipes
        ?.filter((recipe) => {
          if (calorieLimit === "") return true;
          return recipe.calories <= calorieLimit;
        })
        .map((recipe) => (
          <Link to={`recipe/${recipe.id}`} key={recipe.id}>
            <RecipeCard {...recipe} deleteItem={deleteItem} />
          </Link>
        ))}
    </div>
  );
}

export default RecipeList;
