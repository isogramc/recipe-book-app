import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

function RecipeCard(props) {
  const { id, image, imageInCloud, calories, name, deleteItem, handleOpen } =
    props;
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
    <div
      className="inline-block rounded overflow-hidden shadow-lg"
      style={{ margin: "1em" }}
    >
      {imageInCloud && (
        <div className="w-full overflow-hidden">
          <AdvancedImage
            cldImg={cld.image(image)}
            plugins={[responsive(), placeholder()]}
          />
        </div>
      )}
      {!imageInCloud && (
        <div
          className="w-full overflow-hidden"
          style={{ maxHeight: "150px", maxWidth: "250px" }}
        >
          <img
            style={{ width: "300px", height: "auto" }}
            src={image}
            alt={name}
          />
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name} Recipe</div>
        <div className="text-gray-700 text-base">
          <div>Calories: {calories}</div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button onClick={deleteItemCard} style={{ marginRight: "0.5em" }}>
          Delete
        </button>
        <button onClick={sendId}>Edit</button>
      </div>
    </div>
  );
}
export default RecipeCard;
