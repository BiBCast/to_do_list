import { FormEventHandler, useRef } from "react";
import "./App.css";
import { Todo } from "./components/Todo";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "./config/firebase";

function App() {
  const messageRef = useRef<HTMLInputElement>();
  const ref = collection(firestore, "prova");
  function handleSave(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log(messageRef.current?.value);

    try {
      addDoc(ref, { "prova ": messageRef.current?.value });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <form onSubmit={handleSave}>
        <label htmlFor="text"></label>
        <input id="text" type="text" ref={messageRef} />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default App;
