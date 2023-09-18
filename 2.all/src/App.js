import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [alert, setAlert] = useState("");
  const [edited, setEdited] = useState({ taskName: "", id: "" });

  //
  const handleEdit = (task) => {
    setEdited(task);
    setInput(task.taskName);
  };
  const updateItem = () => {
    const editedItem = todo.map((task) => {
      if (task.id === edited.id) {
        return {
          taskName: input,
          id: task.id,
        };
      }
      return task;
    });

    setAlert("Item Updated");
    setTodo(editedItem);
    localStorage.setItem("list", JSON.stringify(editedItem));
    setEdited({});
    setInput("");
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };
  const handleDelete = (id) => {
    const leftTodo = todo.filter((item) => item.id !== id);
    setTodo(leftTodo);
    setAlert("Item Deleted");
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };
  const handleClear = () => {
    setAlert("Todo cleared");
    setTodo([]);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };
  const addItem = () => {
    if (input.length === 0) {
      setAlert("input cannot be empty");
    } else {
      const newInput = {
        taskName: input,
        id: uuidv4(),
      };

      setTodo([newInput, ...todo]);
      const locallyPresent = localStorage.getItem("list");
      if (locallyPresent) {
        const localItem = JSON.parse(locallyPresent);
        const updatedItem = [...localItem, newInput];
        localStorage.setItem("list", JSON.stringify(updatedItem));
        console.log(updatedItem);
      } else {
        localStorage.setItem("list", JSON.stringify(newInput));
      }
      setAlert("Item Added");
      setInput("");
    }
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  //
  return (
    <div
      className="App"
      style={{ backgroundColor: "blue", width: "80vw", margin: "0 auto" }}
    >
      <main>
        <div style={{ padding: "1rem", height: "3rem" }}>{alert}</div>
        <h1> Todo List</h1>
        <section className="input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={edited.id ? updateItem : addItem}>
            {edited.id ? "Edit Item" : "Add Item"}
          </button>
        </section>
      </main>
      <div className="underLine"></div>
      {/*  */}
      <section className="todoList">
        {todo.map((task) => {
          return (
            <div className="list" key={task.id}>
              <h4>
                {task.taskName}
                {task.taskName && <BiEdit onClick={() => handleEdit(task)} />}
                {task.taskName && (
                  <AiOutlineDelete onClick={() => handleDelete(task.id)} />
                )}
              </h4>
            </div>
          );
        })}
      </section>
      <button className="clear" onClick={handleClear}>
        {todo.length ? "Clear All" : ""}
      </button>
    </div>
  );
}

export default App;
