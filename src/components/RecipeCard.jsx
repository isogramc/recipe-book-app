
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';

function RecipeCard(props){
    const {id, image, imageInCloud, calories, servings, name, deleteItem, handleOpen} = props;
    const cloudName = 'dwyipecoa';
    const cld = new Cloudinary({
      cloud: {
        cloudName,
      },
    });
   
    function deleteItemCard(e){
        e.preventDefault();
        deleteItem(id);
    }

    function sendId(e){
      e.preventDefault();
      handleOpen(id);
    }

  return (
      <div class="inline-block rounded overflow-hidden shadow-lg" style={{margin: '1em'}}>
        {imageInCloud && (<div class='w-full overflow-hidden'>
            <AdvancedImage cldImg={cld.image(image)} plugins={[responsive(), placeholder()]} />
          </div>
        )}
        {!imageInCloud && <div class='w-full overflow-hidden' style={{maxHeight: '150px', maxWidth: '250px'}}>
          <img style={{width: '300px', height: 'auto'}} src={image} alt={name}/>
          </div>}
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name} Recipe</div>
            <div class="text-gray-700 text-base">
              <div>Calories: {calories}</div>
              <div>Serves: {servings}</div>
            </div>
        </div>
      <div class="px-6 pt-4 pb-2">
          <button onClick={deleteItemCard} style={{marginRight: "0.5em"}}>Delete</button>
          <button onClick={sendId}>Edit</button>
      </div>
    </div>
  );
}
export default RecipeCard;
