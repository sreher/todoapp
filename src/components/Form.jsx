import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.length >= 3) {
      setTodos([...todos, todo]);
      setTodo({ name: "", done: false });
    } else {
      console.log("use min 3 character");
    }
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          placeholder="Enter Todo Item... "
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
