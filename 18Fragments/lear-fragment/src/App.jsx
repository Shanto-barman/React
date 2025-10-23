import FoodItems from "./components/FoodItems";
import ErrorMessages from "./components/ErrorMessages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/container";



function App() {
  let foodItems = ["dal", "Green vegetable", "Roti", "Salad", "Milk"];
  return (
    <>
    <Container>
      <h1 className="nav-bar">Healthy Food</h1>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessages items={foodItems}></ErrorMessages>
    </Container>
    <Container>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident magni quia reiciendis consectetur eum voluptatibus recusandae.</p>
    </Container>
    </>
  );
}

export default App;
