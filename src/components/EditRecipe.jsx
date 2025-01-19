import React, { useState, StrictMode } from "react";
import FileUpload from "./FileUpload";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import CloudWidget from "./CloudWidget";

function EditRecipe({ recipe, editRecipe }) {
  const cloudName = 'dwyipecoa';

  // State
  const [publicId, setPublicId] = useState('');
  const [imageCloud, setImageCloud] = useState(recipe.imageInCloud);

  const [formData, setFormData] = useState({
    id: recipe.id,
    name: recipe.name,
    calories: recipe.calories,
    image: recipe.image,
    imageInCloud: recipe.imageInCloud,
    description: recipe.description,
    servings: recipe.servings,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
  });

  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedRecipe = {};

    if(imageCloud){
      updatedRecipe = { ...formData, image: publicId, imageInCloud: true };
    }else{
      updatedRecipe = { ...formData };
    }

    // Create a new recipe object with a unique ID and split ingredients & instructions
    console.log(updatedRecipe);

    // Call addRecipe function passed as prop to add new recipe
    editRecipe(updatedRecipe);

    // Clear the form
    setFormData({
      id: "",
      imageInCloud: false,
      name: "",
      calories: "",
      image: "",
      description: "",
      servings: "",
      ingredients: "",
      instructions: "",
    });
  };

  return (<StrictMode>
 <form onSubmit={handleSubmit} class="bg-white shadow-md rounded py-2 px-3" style={{width: "600px", justifySelf: 'center'}}>
      <div>
        <label>
          Name
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div>
        <label>
          Calories
          <input
            className="form-input"
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            required
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div>
       <label>
          Image URL
          <input
            className="form-input"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>

       <div className="cloud-widget"> <CloudWidget customPublicId={publicId} setPublicId={setPublicId} setImageCloud={setImageCloud}/>
        {(publicId!=="") && (
          <div className="image-preview" style={{ width: '50px', margin: '20px auto' }}>
            <AdvancedImage style={{ maxWidth: '100%' }} cldImg={cld.image(publicId)} plugins={[responsive(), placeholder()]} />
          </div>
        )}
      </div>
      </div>
      <div>
        <label>
          Description
          <textarea
            className="form-input"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div>
        <label>
          Servings
          <input
            className="form-input"
            type="number"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
            required
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div>
        <label>
          Ingredients
          <textarea
            className="form-input"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div>
        <label>
          Instructions
          <textarea
            className="form-input"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <button className="btn-block" type="submit">Edit Recipe</button>
    </form>

 
    </StrictMode>
  );
}

export default EditRecipe;
