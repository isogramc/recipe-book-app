function RecipeCard(props){
    const {image, calories, servings, name} = props;
return (
    <div className="grid grid-cols-4 content-end">
        <div className="bg-white overflow-hidden">
            <img className="w-16 md:w-24 lg:w-38" src={image} alt={name}/>
        </div>
        <div className="justify-self-start self-end">{name} Recipe</div>
        <div className="self-end">Calories: {calories}</div>
        <div className="self-end">Serves: {servings}</div>
    </div>
)
}
export default RecipeCard;