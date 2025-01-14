import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from 'react-router-dom';


function RecipeList(props) {

  const [recipes, setRecipes] = useState(props.props.props);
  const [calorieLimit, setCalorieLimit] = useState("");

  const handleCalorieChange = (event) => {
     setCalorieLimit(event.target.value);
  };

  function deleteItem(id){
    const recipesCopy = [...recipes];
    let idToDelete = 0;
    recipesCopy.map((recipe, index)=>{
      if(recipe.id===id){
        idToDelete = index;
      }
    });
    recipesCopy.splice(idToDelete, 1);
    setRecipes(recipesCopy);
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

      {recipes?.filter((recipe, index) => {
        if (calorieLimit === "") {
          return true;
        }

        return recipe.calories <= calorieLimit;
      }).map((recipe) => (

       <Link to={`recipes/${recipe.id}`}> 
          <RecipeCard key={recipe.id} {...recipe} deleteItem={deleteItem}/> 
       </Link>

      ))}
    </div>
  );
}

export default RecipeList;
