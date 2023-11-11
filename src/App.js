import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddToDo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
    // console.log(text);
    console.log(todos);
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos]; // copy
    // console.log(newTodos)
    // console.log(index)
    newTodos[index].completed = !newTodos[index].completed

    setTodos(newTodos)
  };
const handleDeleteItem = (index)=>{
  const newTodos = [...todos];
  newTodos.splice(index , 1)
  setTodos(newTodos)

}

  return (
    <div className="App">
      <h2>To Do List </h2>
      <div className="to-do-container">
        <ul>
          {todos?.map(({text , completed}, index) => {
            return(
            <div className="item">
             <li className={completed ? 'done' : ''} key={index} onClick={() => handleItemDone(index)}>{text} 
             </li>
             <span className="btn-delete" onClick={()=>handleDeleteItem(index)}>❌</span>
            </div>
            )
          })}
        </ul>
      </div>

      <div className="container-footer">
      <input ref={inputRef} placeholder="Enter item..." />
      <button onClick={handleAddToDo}>Add</button>
      </div>

    </div>
  );
}

export default App;
