import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";
import { useTaskManager } from "../model/useTaskManager";

export const TaskContainer = () => {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    undoTask,
    countRemaining,
    totalTasksDone,
  } = useTaskManager();

  return (
    <main>
      <Header />
      <TaskInput onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onUndo={undoTask}
        remaining={countRemaining()}
      />
      <Footer totalDone={totalTasksDone} />
    </main>
  );
};

