import React, { useState, StrictMode } from "react";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import CloudWidget from "./CloudWidget";
import CloudinaryWidget from "./CloudinaryWidget";

function EditRecipe({ recipe, editRecipe, setAddItem}) {
  const cloudName = 'dwyipecoa';
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  // State
  const [publicId, setPublicId] = useState("");
  const [uploadNow, setUploadNow] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleChecked = (e) => {
    console.log(e.target.checked);
    const { name, value } = e.target;
    // this value is used to display the image if it is a Cloud Image
    setUploadNow(e.target.checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(publicId);

    if(uploadNow && publicId !== formData.image){
      setFormData({
        id: formData.id,
        name: formData.name,
        calories: formData.calories,
        image: publicId,
        imageInCloud: true,
        description: formData.description,
        servings: formData.servings,
        ingredients: formData.ingredients,
        instructions: formData.instructions,
      });
    }else{
      setFormData({
        id: formData.id,
        name: formData.name,
        calories: formData.calories,
        image: formData.image,
        imageInCloud: false,
        description: formData.description,
        servings: formData.servings,
        ingredients: formData.ingredients,
        instructions: formData.instructions,
      });
    }
  
    // Edit an existing recipe object
    console.log(formData);

    // Call editRecipe function passed as prop to add new recipe
    editRecipe(formData);

    // Clear the form
    setFormData({
      id: "",
      name: "",
      image: "",
      imageInCloud: null,
      calories: "",
      description: "",
      servings: "",
      ingredients: "",
      instructions: "",
    });
  };

  function cancelEdit(){
    setAddItem(false);
  }

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
        <div>*Is your image an image in Cloudinary cloud? &nbsp;&nbsp;
          {/* This is not a formfield - it is purely used to show and hide elements :: DO NOT TOUCH */}
        <input name="uploadNow" type="checkbox" onChange={toggleChecked} /> 
         {/* This is not a hidden field -> IF there is a publicId this will be true :: DO NOT TOUCH */}
        <input name="imageInCloud" type="hidden" />
      </div>
       {!uploadNow && <label>
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
        </label>}

       {uploadNow && <div className="cloud-widget">
          <CloudWidget />

          {(publicId!=="") && (<div className="image-preview">
             <div style={{width: "50%", alignSelf: 'center'}} >Your upload of image named { publicId } was a success! Here is the Preview:</div>
             <div style={{ width: '50%', margin: '20px' }}><AdvancedImage style={{ width: '150px', justifySelf: 'center'}} cldImg={cld.image(publicId)} plugins={[responsive(), placeholder()]} /></div>
           </div>
          )}
      </div>}
      
      </div>
      <div>
        <label>
          Description
          <textarea
            className="form-input"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Servings
          <input
            className="form-input"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
          Ingredients
          <textarea
            className="form-input"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Instructions
          <textarea
            className="form-input"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button className="btn-block" type="submit">Edit Recipe</button>
      <button className="btn-block" onClick={cancelEdit}>Cancel Edit</button>
    </form>

 
    </StrictMode>
  );
}

export default EditRecipe;
