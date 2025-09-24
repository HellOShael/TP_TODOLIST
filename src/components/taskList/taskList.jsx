import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";

export const TaskList = ({ tasks, onToggle, onDelete, onUndo, remaining }) => {
  return (
    <div className="box">
      <h2 className={styles.title}>
        Il reste {remaining} {remaining === 1 ? "tâche" : "tâches"} à traiter
      </h2>
      <ul className={styles.container}>
        {tasks.length === 0 ? (
          <div className={styles.emptyState}>Aucune tâche</div>
        ) : (
          tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              index={index}
              onToggle={onToggle}
              onDelete={onDelete}
              onUndo={onUndo}
            />
          ))
        )}
      </ul>
    </div>
  );
};
