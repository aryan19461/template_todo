import TodoItem from "./TodoItem";  
const TodoItemsContainer =({todoItems})=>{
    return (
        <>
        <div className="items-container">
      <TodoItem todoDate="4/07/2023" todoName="Buy milk"></TodoItem>
      <TodoItem todoDate="7/011/2023" todoName="Buy Food"></TodoItem>
      <TodoItem todoDate="9/09/2023" todoName="Buy Uno"></TodoItem> 
        </div>
        </>
    )
}
export default TodoItemsContainer;