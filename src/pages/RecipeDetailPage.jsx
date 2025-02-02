import { useParams, Link } from "react-router-dom";
import Recipes from "../assets/basic-recipes.json";
import { useState, useEffect } from "react";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';

function RecipeDetailPage() {
  const [recipes, setRecipes] = useState(Recipes);
  // local storage feature implementation ADD RECIPE :: DO NOT TOUCH 
  const [localStorageCopy, setLocalStorageCopy] = useState({});
  const [localStorageUpdatedRecipes, setLocalStorageUpdatedRecipes] = useState({});
  const cloudName = 'dwyipecoa';
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === id);
  const [stringDesc, setStringDesc] = useState("");

  useEffect(() => {
    if(localStorage && localStorageUpdatedRecipes.length !== localStorageCopy.length){
      // localstorage and initial data file is not the same so update component data
      localStorage.setItem('recipes', JSON.stringify(localStorageUpdatedRecipes));
    } 
  }, [localStorageUpdatedRecipes]);

  useEffect(() => {
    const localStorageCopy = JSON.parse(localStorage.getItem('recipes'));
    if (localStorage && localStorageCopy.length!==localStorageUpdatedRecipes.length) {
      setRecipes(localStorageCopy);     
    }
  }, [localStorageCopy]);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="recipe-page">
      <div
        className={`inline-block rounded overflow-hidden shadow-lg`}
        style={{ margin: "1em", width: "800px", backgroundColor: "white" }}
      >
        <div
          style={{
            position: "absolute",
            width: "800px",
            top: "380px",
            margin: "0 auto",
            color: "white",
            textShadow: "2px 2px black",
          }}
        >
          <h1>{recipe.name}</h1>
        </div>

        <div>
          {recipe.imageInCloud && (
            <div className={`w-full overflow-hidden`}>
              <AdvancedImage
                style={{ maxWidth: "100%" }}
                cldImg={cld.image(recipe.image)}
                plugins={[responsive(), placeholder()]}
              />
            </div>
          )}

          {!recipe.imageInCloud && <img src={recipe.image} alt={recipe.name} />}
        </div>
        <div className="recipe-text">
        <div style={{display: 'flex', justifySelf: 'center', alignItems: "center"}}>
            <AdvancedImage style={{ width: "35px", margin: '10px' }} cldImg={cld.image('clock_do9zbn.svg')}plugins={[responsive(), placeholder()]}/>
            {recipe.servings} Serving(s)
            <AdvancedImage style={{ width: "35px", margin: '10px' }} cldImg={cld.image('pie-chart-svgrepo-com_jf0vyr.svg')}plugins={[responsive(), placeholder()]}/>
            {recipe.calories} Calories
            <AdvancedImage style={{ width: "35px", margin: '10px' }} cldImg={cld.image('bar-chart-report-svgrepo-com_zutvfq.svg')}plugins={[responsive(), placeholder()]}/>
          </div>
          <h2>Ingredients</h2>
          <ul className="recipe-ingredients">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}> 
                🌱 - {ingredient} 
              </li>
            ))}
          </ul>
          <br/>
          <hr/>
          <div style={{display: 'flex', justifySelf: 'center', marginTop: '10px'}}>
            <AdvancedImage style={{ width: "30px", margin: '10px' }} cldImg={cld.image('clock_do9zbn.svg')}plugins={[responsive(), placeholder()]}/>
            <AdvancedImage style={{ width: "30px", margin: '10px' }} cldImg={cld.image('oven-roast-svgrepo-com_mkcnmk.svg')}plugins={[responsive(), placeholder()]}/>
            <AdvancedImage style={{ width: "30px", margin: '10px' }} cldImg={cld.image('hourclock-svgrepo-com_ruhhx5.svg')}plugins={[responsive(), placeholder()]}/>
          </div>
          <br/>
          <h2>Instructions</h2>
          <ol className="recipe-instructions">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
        <div style={{margin: '50px'}}><Link to="/"> &lt; Back</Link> </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
