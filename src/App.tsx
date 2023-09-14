import { FormEvent, useState } from "react";
import "./App.css";

interface ToDoList {
  id: string;
  text: string;
  confirm: boolean;
}

function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState<ToDoList[]>([]);

  function TodoList(e: FormEvent) {
    e.preventDefault();

    setTodoList((current) => {
      return [
        ...current,
        { id: crypto.randomUUID(), text: newItem, confirm: true },
      ];
    });
  }

  function deleteTodo(id: string) {
    setTodoList((current) => {
      return current.filter((item) => {
        return item.id !== id;
      });
    });
  }
  return (
    <>
      <form onSubmit={TodoList}>
        <h1>To do list</h1>
        <input
          type="text"
          placeholder="write"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>Add</button>
      </form>
      {todoList.map((item) => {
        return (
          <div className="todo-list" key={item.id}>
            <label>
              <input type="checkbox" defaultChecked={item.confirm} />
              {item.text}
            </label>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
