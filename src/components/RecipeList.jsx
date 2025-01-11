import React, { useState } from "react";
import Recipes from "./../assets/basic-recipes.json";
import RecipeCard from "./RecipeCard";

{
  /* <div className="h-32 grid gap-x-4 gap-y-4 grid-cols-4 content-end striped"> */
}

function RecipeList() {
  const [calorieLimit, setCalorieLimit] = useState("");

  const handleCalorieChange = (event) => {
    setCalorieLimit(event.target.value);
  };

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

      {Recipes.filter((recipe) => {
        if (calorieLimit === "") {
          return true;
        }

        return recipe.calories <= calorieLimit;
      }).map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
