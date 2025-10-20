import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

function App() {
  let foodItems = ["dal","Green vegetable","Roti","Salad","Milk"];
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 && <>I am still hungry</>}
      <ul className="list-group">
        {foodItems.map((item) =>(
          <li key={item} className="list-group-item">{item}</li>))}
      </ul>
    </React.Fragment>
  );
}

export default App;
