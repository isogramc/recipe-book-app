import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailsPage from "./pages/DetailsPage";
import ErrorPage from "./pages/ErrorPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Recipes from "./assets/basic-recipes.json";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <SideBar />
      <div className="content">
        {" "}
        <Routes>
          <Route path="/" element={<HomePage props={Recipes} />} />
          <Route
            path="/recipes/:recipeId"
            element={<DetailsPage props={Recipes} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
