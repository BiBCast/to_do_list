import { FormEvent, useEffect, useState } from "react";
import React from "react";
import { firestore } from "../config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

interface ToDoList {
  id: string;
  text?: string;
  confirm?: boolean;
}

export function Todo() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState<ToDoList[]>([]);
  const todoCollectionRef = collection(firestore, "TODO");
  const getData = async () => {
    try {
      const data = await getDocs(todoCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodoList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  function FormHandler(e: FormEvent) {
    e.preventDefault();
    const addTodo = async () => {
      try {
        await addDoc(todoCollectionRef, {
          text: newItem,
          confirm: true,
        });
        getData();
      } catch (e) {
        console.log(e);
      }
    };
    addTodo();

    /* setTodoList((current) => {
      return [
        ...current,
        { id: crypto.randomUUID(), text: newItem, confirm: true },
      ];
    }); */
  }

  const deleteTodo = async (id: string) => {
    const todo = doc(todoCollectionRef, id);
    await deleteDoc(todo);
    getData();
  };
  return (
    <>
      <form onSubmit={FormHandler}>
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
