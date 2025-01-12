import { useParams } from "react-router-dom";
import Recipes from "../assets/basic-recipes.json";

function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = Recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h2> {recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
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
