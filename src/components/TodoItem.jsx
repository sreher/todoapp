import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete Button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleCLick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo,
    );
    setTodos(newArray);
  }
  const strikeLine = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={strikeLine} onClick={() => handleCLick(item.name)}>
          {item.name}
        </span>
        <button
          onClick={() => handleDelete(item)}
          className={styles.deleteButton}
        >
          x
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
