import FoodItems from "./components/FoodItems";
import ErrorMessages from "./components/ErrorMessages";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

function App() {
    let foodItems = ["dal", "Green vegetable", "Roti", "Salad", "Milk"];
  return (
    <React.Fragment>
      <h1 className="nav-bar">Healthy Food</h1>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessages items={foodItems}></ErrorMessages>
    </React.Fragment>
  );
}

export default App;
