import { useState } from "react";


// use state is used to store data that can change   

function App() {
  const [todos, setTodos] = useState([]);     //Todo list can change
  const [input, setInput] = useState("");       //Input value can change
  const [editingId, setEditingId] = useState(null);        //Which todo we're editing can change
                                                                         // editingId=null means  We're not editing anything.

  // CREATE
  const addTodo = () => {
    if (input.trim() === "") return;

    if (editingId !== null) {
      // UPDATE
      setTodos(
        todos.map((todo) =>
          todo.id === editingId
            ? { ...todo, text: input }
            : todo
        )
      );

      setEditingId(null);
    } else {
      // CREATE
      const newTodo = {
        id: Date.now(),
        text: input,  
      };

      setTodos([...todos, newTodo]);
    }

    setInput("");
  };

  // DELETE
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // EDIT
  const editTodo = (todo) => {
    setInput(todo.text);
    setEditingId(todo.id);
  };
 



  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
    
    



      <h1>To-Do CRUD App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodo}>
        {editingId !== null ? "Update" : "Add"}
      </button>

      <hr />

      {todos.length === 0 ? (
        <p>No todos yet.</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>{todo.text}</span>

            <div>
              <button onClick={() => editTodo(todo)}>
                Edit
              </button>

              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
      
    </div>
  );
}

export default App;
