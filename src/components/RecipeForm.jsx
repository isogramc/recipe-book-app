import React, { useState } from "react";
import { useNavigate } from "react-router";

function RecipeForm({ addRecipe }) {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    image: "",
    description: "",
    servings: "",
    ingredients: "",
    instructions: "",
    foundOn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new recipe object with a unique ID and split ingredients & instructions
    const newRecipe = {
      ...formData,
      id: crypto.randomUUID(),
      ingredients: formData.ingredients.split("\n"), // assuming user inputs as new lines
      instructions: formData.instructions.split("\n"), // assuming user inputs as new lines
    };

    // Call addRecipe function passed as prop to add new recipe
    addRecipe(newRecipe);

    // Clear the form
    setFormData({
      name: "",
      calories: "",
      image: "",
      description: "",
      servings: "",
      ingredients: "",
      instructions: "",
      foundOn: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} class="bg-white shadow-md rounded py-2 px-3" style={{width: "600px", justifySelf: 'center'}}>
      <div style={{textAlign: 'left'}}>
        <label>
          Name
          <input
            className={`shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </label>
      </div>
      <div style={{textAlign: 'left'}}>
        <label>
          Calories
          <input
            className={`shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            required
            />
        </label>
      </div>
      <div style={{textAlign: 'left'}}>
        <label>
          Image URL
          <input
            className={`shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            />
        </label>
      </div>
      <div style={{textAlign: 'left'}}>
        <label>
          Description
          <textarea
            className={`shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required  
          />
        </label>
      </div>
      <div style={{textAlign: 'left'}}>
        <label>
          Servings
          <input
            className={`shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            type="number"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div style={{textAlign: 'left'}}>
        <label>
          Ingredients
          <textarea
            className={`shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div style={{textAlign: 'left'}}>
        <label>
          Instructions
          <textarea
            className={`shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </label>
        <input name="foundOn" value="foundOn" type="hidden"/>
      </div>
      <button className="btn-block" type="submit">Add Recipe</button>
      <button className="btn-block" onClick={()=>{navigate("/random")}}>Random Recipe</button>
    </form>
  );
}

export default RecipeForm;
