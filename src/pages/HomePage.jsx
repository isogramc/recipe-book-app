
import RecipeList from './../components/RecipeList'

function HomePage(props){
    return (
        <div className="home-page">
            <h1 className="text-3xl font-bold">
                My Recipes
            </h1>
            <RecipeList props={props}/>
        </div> 
    )
}

export default HomePage;