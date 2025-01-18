import React, { useState } from "react";
import FileUpload from "./FileUpload";

function EditRecipe({ recipe, editRecipe }) {
  const [formData, setFormData] = useState({
    id: recipe.id,
    name: recipe.name,
    calories: recipe.calories,
    image: recipe.image,
    description: recipe.description,
    servings: recipe.servings,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new recipe object with a unique ID and split ingredients & instructions
    const updatedRecipe = { ...formData };

    // Call addRecipe function passed as prop to add new recipe
    editRecipe(updatedRecipe);

    // Clear the form
    setFormData({
      id: "",
      name: "",
      calories: "",
      image: "",
      description: "",
      servings: "",
      ingredients: "",
      instructions: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Calories:
          <input
            className="form-input"
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input
            className="form-input"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            className="form-input"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Servings:
          <input
            className="form-input"
            type="number"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Ingredients:
          <textarea
            className="form-input"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Instructions:
          <textarea
            className="form-input"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div><FileUpload /></div>
      <button type="submit">Edit Recipe</button>
    </form>
  );
}

export default EditRecipe;
