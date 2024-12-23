import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div>
      <RecipeList />
    </div>
   </div>
  )
}

export default App
