import { useParams } from "react-router-dom";
import Recipes from "../assets/basic-recipes.json";
import { useState } from "react";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';

function RecipeDetailPage() {
  const cloudName = 'dwyipecoa';
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
  const { id } = useParams();
  const recipe = Recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  function editRecipe(updatedRecipe){
    console.log(updatedRecipe);
  }

  return (
    <div>
      <h2> {recipe.name}</h2>

      {recipe.imageInCloud && (
          <div className="image-preview" style={{ width: '500px', margin: '0px auto' }}>
            <AdvancedImage style={{ maxWidth: '100%' }} cldImg={cld.image(recipe.image)} plugins={[responsive(), placeholder()]} />
          </div>
        )}
         {!recipe.imageInCloud && <img src={recipe.image} alt={recipe.name}/>}

      <p>Servings: {recipe.servings}</p>

      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetailPage;
