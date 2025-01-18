import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import EditRecipe from "./EditRecipe";
import { Link } from "react-router-dom";

function RecipeList({ recipes, setRecipes, handleOpen }) {
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
    let nindex = 0
    acopy.forEach((recipe, index)=>{
      if(recipe.id===updatedRecipe.id){
        nindex = index;
      }
    })
    console.log(nindex, updatedRecipe);
    const updatedRecipes = acopy.splice(nindex, 1, updatedRecipe);
    console.log(acopy);
    setRecipes(acopy);
    setAddItem(false);
  }

  function handleOpen(id){
    let irecipe = {};
    recipes.map((item, index)=>{
      if(item.id === id){
        irecipe = item;
      }
    })
    setAddEditRecipe(irecipe)
    setAddItem(true);
  }

  return (
    <div>
      {addItem && <EditRecipe recipe={addEditRecipe} editRecipe={editRecipe}/>}
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
            <RecipeCard {...recipe} deleteItem={deleteItem} handleOpen={handleOpen}/>
          </Link>
        ))}
    </div>
  );
}

export default RecipeList;
