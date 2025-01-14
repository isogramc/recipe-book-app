import { useParams, Link } from 'react-router-dom';
function DetailsPage(props){
    const { recipeId } = useParams();
    console.log('recipeId -->', recipeId);
    return(<div>
        Recipe

        <Link to="/">Back</Link>
    </div>);
}
export default DetailsPage;