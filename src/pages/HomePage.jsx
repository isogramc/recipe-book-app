
import RecipeList from './../components/RecipeList'

function HomePage(){
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div>This is the home page</div>
            <RecipeList />
        </div>
        
    )
}

export default HomePage;