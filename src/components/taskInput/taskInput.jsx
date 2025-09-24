import { useState } from "react";
import styles from "./taskInput.module.css";

export const TaskInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajouter une nouvelle tâche</h2>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Ajouter une nouvelle tâche"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
