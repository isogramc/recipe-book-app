import React, { useState } from "react";
import RecipeList from "./../components/RecipeList";
import RecipeForm from "../components/RecipeForm";
import SearchBox from "../components/SearchBar";

function HomePage({ props }) {
  const [recipes, setRecipes] = useState(props);
  const [showForm, setShowForm] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSearchByCals, setShowSearchByCals] = useState(false);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
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
    //console.log(e.target.value);
    let searchstr = e.target.value;
    let searchStrlength = searchstr.length;
    const foodsCopy = [...recipes];
    const arr = [];
    const foodArr = foodsCopy.map((food) => {
      if (
        food.name.charAt(0).toLowerCase() === searchstr.charAt(0).toLowerCase()
      ) {
        if (
          food.name.toLowerCase().substring(0, searchStrlength) ===
          searchstr.toLowerCase()
        ) {
          arr.push(food);
        }
      }
    });
    // console.log(arr);
    if (searchStrlength > 0) {
      setRecipes(arr);
    } else {
      setRecipes(foodsCopy);
    }
  }

  return (
    <div className="home-page">
      <div class="bg-white py-2 px-3">
        <h1 className="text-3xl" style={{marginBottom: '0.5em'}}>My Recipes</h1>
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
