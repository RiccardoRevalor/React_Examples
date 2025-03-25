import { useState } from 'react'
import './App.css'

function ToDoApp() {
  //Use state hook syntax
  //const [state, setState] = useState(initialValue);
  const [todos, setTodos] = useState([]);  //initialize todo as an empty array
  const [input, setInput] = useState(''); //initialize input as an empty string



  
  //add a new todo item to the list
  const newTodo = () => {
    //check user input
    if (input){

      //create a new Todo item
      const newT = {id: Date.now(), text: input, completed: false};
      //if input is not empty, add new todo item to the list
      setTodos([...todos, newT]);
      //clear the input field
      setInput('');
    }
  }


  //remove a todo item from the list by text
  const removeTodoByText = (text) => {

    //filter out all the matching todo items
    newTodos = todos.filter((t) => t !== text);
    //update the todo list
    setTodos(newTodos);
  }

  //remove a todo item from the list by id
  const removeTodoById = (id) => {
    //filter out all the matching todo items
    newTodos = todos.filter((t) => t.id !== id);
    //update the todo list
    setTodos(newTodos);
  }


  //mark a todo item as completed by id 
  const markTodoAsCompleted = (id) => {

    //fine the right todo
    const res = todos.find((t) => t.id === id);
    if (res){
      //update the todo item
      res.completed = true;
    }

  }


  //return the component

  return (
    <>
    {/*import bootstrap*/}


    <div className = "container">
      <h1 className="text-primary">Todo List</h1>
      <label htmlFor="createNewToDoItem" class="form-label">Create a new ToDo Item...</label>
      <textarea class="form-control" id="createNewTodoItem_Text" rows="3" onChange={(e) => setInput(e.target.value)} ></textarea>

      <button type="button" class="btn btn-success" onClick={newTodo}>Add a new ToDo Item</button>


    </div>

    <div className="container mt-4">
        <ul className="list-unstyled">
          {todos.map((t) => (
            <li key={t.id} className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">{t.text}</h5>
                <p className="card-text">
                  Status: {t.completed ? '✅ Completed' : '❌ Not Completed'}
                </p>
                <button
                  type="button"
                  className="btn btn-danger me-2"
                  onClick={() => removeTodoById(t.id)}
                >
                  Remove
                </button>
                {!t.completed && (
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => markTodoAsCompleted(t.id)}
                  >
                    Mark as Completed
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>


    
    
    </>
  )
}

export default ToDoApp
