import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import ReactPlayer from 'react-player/youtube';
import RecipeFormApi from './../components/RecipeFormApi';

const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

function DetailsPage(props){

  const cloudName = 'dwyipecoa';
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });
  
  const [recipe, setRecipe] = useState({});


  useEffect(() => {
    // the mealsdb is a free recipe database and it is available to use online
    const fetchData = async () => {
      try{ 
        const result = await fetch(url);
        result.json().then(json => {
          //console.log(json.meals);
          for (let [key, value] of Object.entries(json.meals)){
          // console.log("key",  key, "value", value);
          setRecipe(value);
          };
        })
      } catch (error) { 
        console.log("Something went wrong", error) 
      };
    }
    fetchData();
   }, []);

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
          <h1>{recipe.strMeal}</h1>
        </div>

        <div>

          {recipe?.strMealThumb && <img style={{width: '100%'}} src={recipe.strMealThumb} alt="recipe image"/>}

        </div>
        <div className="recipe-text">
        <div style={{display: 'flex', justifySelf: 'center', alignItems: "center"}}>
            {(recipe?.strArea!="") && <div>{recipe.strArea}</div>}&nbsp;{(recipe?.strCategory!="") && <div>{recipe.strCategory}</div>}
            <AdvancedImage style={{ width: "35px", margin: '10px' }} cldImg={cld.image('clock_do9zbn.svg')}plugins={[responsive(), placeholder()]}/>
             {recipe.servings} Serving(s) 
            <AdvancedImage style={{ width: "35px", margin: '10px' }} cldImg={cld.image('pie-chart-svgrepo-com_jf0vyr.svg')}plugins={[responsive(), placeholder()]}/>
             {recipe.calories} Calories 
            <AdvancedImage style={{ width: "35px", margin: '10px' }} cldImg={cld.image('bar-chart-report-svgrepo-com_zutvfq.svg')}plugins={[responsive(), placeholder()]}/>
          </div>
          <h2>Ingredients</h2>
            <ul className="recipe-ingredients">
            {(recipe?.strIngredient && recipe?.strIngredient!="") && (<li>
              🌱 - <span>{recipe.strMeasure}</span> <span>{recipe.strIngredient}</span>
            </li>)}
            {(recipe?.strIngredient1!="") && (<li>
              🌱 - <span>{recipe.strMeasure1}</span> <span>{recipe.strIngredient1}</span>
            </li>)}
            {(recipe?.strIngredient2!="") && (<li>
              🌱 - <span>{recipe.strMeasure2}</span> <span>{recipe.strIngredient2}</span>
            </li>)}
            {(recipe?.strIngredient3!="") && (<li>
              🌱 - <span>{recipe.strMeasure3}</span> <span>{recipe.strIngredient3}</span>
            </li>)}
            {(recipe?.strIngredient4!="") && (<li>
              🌱 - <span>{recipe.strMeasure4}</span> <span>{recipe.strIngredient4}</span>
            </li>)}  
            {(recipe?.strIngredient5!="") && (<li>
              🌱 - <span>{recipe.strMeasure5}</span> <span>{recipe.strIngredient5}</span>
            </li>)} 
            {(recipe?.strIngredient6!="") && (<li>
              🌱 - <span>{recipe.strMeasure6}</span> <span>{recipe.strIngredient6}</span>
            </li>)}  
            {(recipe?.strIngredient7!="") && (<li>
              🌱 - <span>{recipe.strMeasure7}</span> <span>{recipe.strIngredient7}</span>
            </li>)}  
            {(recipe?.strIngredient8!="") && (<li>
              🌱 - <span>{recipe.strMeasure8}</span> <span>{recipe.strIngredient8}</span>
            </li>)}  
            {(recipe?.strIngredient9!="") && (<li>
              🌱 - <span>{recipe.strMeasure9}</span> <span>{recipe.strIngredient9}</span>
            </li>)}  
            {(recipe?.strIngredient10!="") && (<li>
              🌱 - <span>{recipe.strMeasure10}</span> <span>{recipe.strIngredient10}</span>
            </li>)}  
            {(recipe?.strIngredient11!="") && (<li>
              🌱 - <span>{recipe.strMeasure11}</span> <span>{recipe.strIngredient11}</span>
            </li>)}
            {(recipe?.strIngredient12!="") && (<li>
              🌱 - <span>{recipe.strMeasure12}</span> <span>{recipe.strIngredient12}</span>
            </li>)}
            {(recipe?.strIngredient13!="") && (<li>
              🌱 - <span>{recipe.strMeasure13}</span> <span>{recipe.strIngredient13}</span>
            </li>)}
            {(recipe?.strIngredient14!="") && (<li>
              🌱 - <span>{recipe.strMeasure14}</span> <span>{recipe.strIngredient14}</span>
            </li>)}  
            {(recipe?.strIngredient15!="") && (<li>
              🌱 - <span>{recipe.strMeasure15}</span> <span>{recipe.strIngredient15}</span>
            </li>)} 
            {(recipe?.strIngredient16!="") && (<li>
              🌱 - <span>{recipe.strMeasure16}</span> <span>{recipe.strIngredient16}</span>
            </li>)}  
            {(recipe?.strIngredient17!="") && (<li>
              🌱 - <span>{recipe.strMeasure17}</span> <span>{recipe.strIngredient17}</span>
            </li>)}  
            {(recipe?.strIngredient18!="") && (<li>
              🌱 - <span>{recipe.strMeasure18}</span> <span>{recipe.strIngredient18}</span>
            </li>)}  
            {(recipe?.strIngredient19!="") && (<li>
              🌱 - <span>{recipe.strMeasure19}</span> <span>{recipe.strIngredient19}</span>
            </li>)}  
            {(recipe?.strIngredient20!="") && (<li>
              🌱 - <span>{recipe.strMeasure20}</span> <span>{recipe.strIngredient20}</span>
            </li>)}  
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
         {recipe?.strInstructions}
         <div style={{display: 'flex', justifySelf: 'center', marginTop: '50px'}}>{(recipe?.strYoutube!="") && <ReactPlayer url={recipe.strYoutube} />}</div>
        </div>
        <RecipeFormApi recipe={recipe}/>
        <div style={{margin: '50px'}}><Link to="/"> &lt; Back</Link> </div>
      </div>
    </div>
    );
}
export default DetailsPage;