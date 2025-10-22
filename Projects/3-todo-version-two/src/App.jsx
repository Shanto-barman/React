import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import './App.css'
function App() {

const todoItems = [
  {
    name:"Buy Milk",
    newDate:"13/02/25"
  },
  {
    name:"Buy orang",
    newDate:"13/02/25"
  },
   {
    name:"Like this video",
    newDate:"Right now"
  }
]

  return (
  <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <TodoItems todoItems={todoItems}/>
   
   
  </center>
  );
}

export default App;
