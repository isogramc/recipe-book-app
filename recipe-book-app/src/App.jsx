import { useState } from 'react'
import { Routes, Route } from "react-router-dom"; 
import './App.css'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"; 
import ErrorPage from './pages/ErrorPage';
import SideBar from './components/SideBar';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <SideBar/>
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
   </div>
  )
}

export default App
