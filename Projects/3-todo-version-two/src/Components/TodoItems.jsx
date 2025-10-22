import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem todoDate={item.newDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
