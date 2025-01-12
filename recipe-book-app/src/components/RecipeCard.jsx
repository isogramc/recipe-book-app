import { Link } from "react-router-dom";

function RecipeCard(props) {
  const { id, image, calories, servings, name } = props;

  function deleteItem(e) {
    e.preventDefault();
    const elementToRemove = e.target.parentElement.parentElement;
    elementToRemove.remove();
  }

  return (
    <div id={id} className="grid grid-cols-5 content-end">
      <div className="bg-white overflow-hidden">
        <img className="w-16 md:w-24 lg:w-38" src={image} alt={name} />
      </div>
      <div className="justify-self-start self-end">
        {name} Recipe
        <Link to={`/recipe/${id}`}>View Recipe</Link>
      </div>
      <div className="self-end">Calories: {calories}</div>
      <div>
        <button onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
}

export default RecipeCard;
