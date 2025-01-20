import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

function RecipeCard(props) {
  const { id, image, imageInCloud, calories, name, deleteItem, handleOpen } = props;
  const cloudName = "dwyipecoa";
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  function deleteItemCard(e) {
    e.preventDefault();
    deleteItem(id);
  }

  function sendId(e) {
    e.preventDefault();
    handleOpen(id);
  }

  return (
      <div class="inline-block rounded overflow-hidden shadow-lg" style={{margin: '1em', width: '250px', backgroundColor: 'white'}}>

        {imageInCloud && (<div class='w-full overflow-hidden'  style={{height: '150px', width: '300px', verticalAlign: 'center'}}>
            <AdvancedImage cldImg={cld.image(image)} plugins={[responsive(), placeholder()]} />
          </div>)}

        {!imageInCloud && <div class='w-full overflow-hidden' style={{height: '150px', width: '300px'}}>
          <img style={{minWidth: '300px', minHeight: '150px'}} src={image} alt={name}/>
          </div>}

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name}</div>
            <div class="text-gray-700 text-base">
            <div>Calories: {calories}</div>
            <div>Servings: {servings}</div>
        </div>

      <div className="px-6 pt-4 pb-2">
        <button onClick={deleteItemCard} style={{ marginRight: "0.5em" }}>
          Delete
        </button>
        <button onClick={sendId}>Edit</button>
      </div>
    </div>
    </div> 
  );
}

export default RecipeCard;
