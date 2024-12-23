import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Recipes from './assets/basic-recipes.json'
import RecipeCard from './components/RecipeCard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {Recipes.map(recipe => (
      <RecipeCard key={recipe.id}
                  {...recipe}
                  // id={recipe.id} 
                  // name={recipe.name} 
                  // calories={recipe.calories} 
                  // servings={recipe.servings} 
                  // image={recipe.image}
      />
    ))}
    
   </div>
  )
}

export default App
