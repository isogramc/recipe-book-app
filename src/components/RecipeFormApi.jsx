import React, { useState } from "react";

function RecipeFormApi({ recipe }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new recipe object with a unique ID and copy API properties
    // make sure this api retains all fields required for later updating 
    const newRecipe = {
      ...recipe,
      id: crypto.randomUUID(),
      foundOn: "mealsDB",
      name: recipe.strMeal,
      calories: 200,
      image: recipe.strMealThumb,
      description: recipe.strMeal,
      servings: 5,
      instructions: recipe.strInstructions,
      ingredients: [`${recipe.strMeasure1} ${recipe.strIngredient1}`, 
        `${recipe.strMeasure2} ${recipe.strIngredient2}`, `${recipe.strMeasure3} ${recipe.strIngredient3}`, 
        `${recipe.strMeasure4} ${recipe.strIngredient4}`, `${recipe.strMeasure5} ${recipe.strIngredient5}`, 
        `${recipe.strMeasure6} ${recipe.strIngredient6}`,`${recipe.strMeasure7} ${recipe.strIngredient7}`, 
        `${recipe.strMeasure8} ${recipe.strIngredient8}`, `${recipe.strMeasure9} ${recipe.strIngredient9}`, 
        `${recipe.strMeasure10} ${recipe.strIngredient10}`, 
        `${recipe.strMeasure11} ${recipe.strIngredient11}`, `${recipe.strMeasure12} ${recipe.strIngredient12}`, 
        `${recipe.strMeasure13} ${recipe.strIngredient13}`, `${recipe.strMeasure14} ${recipe.strIngredient14}`, 
        `${recipe.strMeasure15} ${recipe.strIngredient15}`, `${recipe.strMeasure16} ${recipe.strIngredient16}`,
        `${recipe.strMeasure17} ${recipe.strIngredient17}`, `${recipe.strMeasure18} ${recipe.strIngredient18}`, 
        `${recipe.strMeasure19} ${recipe.strIngredient19}`, `${recipe.strMeasure20} ${recipe.strIngredient20}`,
      ],
    };

    // Copy recipe to save it -> remember to give credit to where it was found
    console.log(newRecipe);

  };

  return (
    <form onSubmit={handleSubmit} style={{width: "600px", justifySelf: 'center'}}>
      <button className="btn-block" type="submit">Copy Recipe</button>
    </form>
  );
}

export default RecipeFormApi;
