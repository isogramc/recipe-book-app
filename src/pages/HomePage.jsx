import React, { useState, useEffect } from "react";
import RecipeList from "./../components/RecipeList";
import RecipeForm from "../components/RecipeForm";
import SearchBox from "../components/SearchBar";

function HomePage({ props }) {
  const [originalRecipes] = useState(props);
  const [recipes, setRecipes] = useState(props);
  const [showForm, setShowForm] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSearchByCals, setShowSearchByCals] = useState(false);
  // local storage feature implementation ADD RECIPE :: DO NOT TOUCH 
  const [localStorageCopy, setLocalStorageCopy] = useState({});
  const [localStorageUpdatedRecipes, setLocalStorageUpdatedRecipes] = useState({});

  useEffect(() => {
    if(localStorage && localStorageUpdatedRecipes.length !== localStorageCopy.length){
      // localstorage and initial data file is not the same so update component data
      localStorage.setItem('recipes', JSON.stringify(localStorageUpdatedRecipes));
    } 
  }, [localStorageUpdatedRecipes]);

  useEffect(() => {
    const localStorageCopy = JSON.parse(localStorage.getItem('recipes'));
    if (localStorage && localStorageCopy.length!==localStorageUpdatedRecipes.length) {
      setRecipes(localStorageCopy);     
    }
  }, [localStorageCopy]);
  // end localstorage implementation

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes, newRecipe];
      setLocalStorageUpdatedRecipes([...prevRecipes, newRecipe]);
      originalRecipes.push(newRecipe);
      return updatedRecipes;
    });
    setShowForm(false);
  };

  const handleToggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleToggleSearch = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleToggleSearchbyCals = () => {
    setShowSearchByCals(!showSearchByCals);
  };

  function doSearch(e) {
    const searchStr = e.target.value.toLowerCase();

    if (searchStr.length > 0) {
      const filteredRecipes = originalRecipes.filter((food) =>
        food.name.toLowerCase().startsWith(searchStr)
      );
      setRecipes(filteredRecipes);
    } else {
      setRecipes(originalRecipes);
    }
  }

  return (
    <div className="home-page">
      <div className={`bg-white py-2 px-3`}>
        <div>
          <h1 className="text-3xl" style={{marginBottom: '0.5em'}}>My Recipes</h1>
        </div>
        <button className="btn-block" onClick={handleToggleForm}>
          {showForm ? "Hide Form" : "Add Recipe"}
        </button>
        <button className="btn-block" onClick={handleToggleSearch}>
          {showSearchBar ? "Hide Searchbar" : "Search"}
        </button>
        <button className="btn-block" onClick={handleToggleSearchbyCals}>
          {showSearchByCals ? "Hide Search by Cals" : "Search by Cals"}
        </button>
        {showForm && <RecipeForm addRecipe={addRecipe} />}
        {showSearchBar && <SearchBox doSearch={doSearch} />}
      </div>
      <RecipeList recipes={recipes} setRecipes={setRecipes} showSearchByCals={showSearchByCals}/>
    </div>
  );
}

export default HomePage;
