import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import DetailsPage from "./pages/DetailsPage";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Recipes from "./assets/basic-recipes.json";

function App() {
  const [recipes, setRecipes] = useState(Recipes);
  //local storage feature -> copy data into local storage :: DO NOT TOUCH
  const [localStorageCopy, setLocalStorageCopy] = useState({});

  const [url, updateUrl] = useState();
  const [error, updateError] = useState();
  
  useEffect(() => {
    //initial setup :: (when app loads) copy fresh copy of data file into Local Storage
    if(localStorage){
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }, [recipes]);

  useEffect(() => {
    if (localStorage && localStorageCopy){
      const localStorageCopy = JSON.parse(localStorage.getItem('recipes')); 
      if(localStorageCopy.length!==recipes.length) {
      // localstorage and initial data file is not the same so update component data
        setRecipes(localStorageCopy); 
      }
    }
  }, [localStorageCopy]);

  function handleOnUpload(error, result, widget) {
    if ( error ) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  }

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
      <SideBar />
      <Routes>
          <Route path="/" element={<HomePage props={recipes}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/random" element={<DetailsPage props={recipes}/>} />
          <Route exact path="/random/:slug" element={<DetailsPage props={recipes}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
