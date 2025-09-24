import styles from "./taskItem.module.css";
import { CheckIcon, TrashIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export const TaskItem = ({ task, index, onToggle, onDelete, onUndo }) => {
  const isDone = task.done;

  return (
    <li
      className={`${styles.container} ${
        isDone ? styles.success : styles.default
      }`}
    >
      <div className={styles.item}>
        <div className={`${styles.id} ${isDone ? styles.idSuccess : styles.idDefault}`}>
          {index + 1}
        </div>
        <div className={isDone ? styles.contentSuccess : styles.contentDefault}>
          {task.label}
        </div>
      </div>
      <div className={styles.actions}>
        {!isDone ? (
          <button className="button-primary" onClick={() => onToggle(task.id)}>
            <CheckIcon className="icon-class" />
          </button>
        ) : (
          <button className="button-primary" onClick={() => onUndo(task.id)}>
            <ArrowUturnLeftIcon className="icon-class" />
          </button>
        )}
        <button className="button-primary" onClick={() => onDelete(task.id)}>
          <TrashIcon className="icon-class" />
        </button>
      </div>
    </li>
  );
};
