import { useState } from "react";

export function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  function addTask(label) {
    const newTask = {
      id: Date.now(),
      label,
      done: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function undoTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: false } : task
      )
    );
  }

  function countRemaining() {
    return tasks.filter((t) => !t.done).length;
  }

  function countDone() {
    return tasks.filter((t) => t.done).length;
  }

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    undoTask,
    countRemaining,
    totalTasksDone: countDone(),
  };
}
