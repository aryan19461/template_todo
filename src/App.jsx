import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css"
import TodoItemsContainer from "./components/TodoItemsContainer";
function App() {

  //todo items 
  const todoitems = [
    {
    name : "buy milk",
    date: "4/2/23",
  },
  {
    name : "buy pizza",
    date: "5/2/23",
  },
  {
    name : "buy chot",
    date: "6/2/23",
  }
];

  return <center className="container">
    <AppName/>
    <AddTodo/>
    <TodoItemsContaine todoItems={todoitems}/>
    
  </center>
  
}

export default App;