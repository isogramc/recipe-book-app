import React, { useState } from "react";

function RecipeForm({ addRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    image: "",
    description: "",
    servings: "",
    ingredients: "",
    instructions: "",
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
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default RecipeForm;
