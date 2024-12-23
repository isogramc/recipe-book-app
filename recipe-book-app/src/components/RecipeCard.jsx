function RecipeList(props){
    const {image, calories, servings, name} = props;
return (
    <div>
        <img src={image} alt={name}/>
        <div>{calories}</div>
        <div>{servings}</div>
        <div>{name}</div>
    </div>
)
}
export default RecipeList;