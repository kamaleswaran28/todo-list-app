import "./App.css";
import { useState } from "react";
import { Tasklist } from "./task-list";

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  const fetchTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const addTaskName = () => {
    const updatedTaskList = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      name: taskName,
      isCompleted: false,
    };
    setTaskList([...taskList, updatedTaskList]);
    setTaskName("");
  };

  const deleteTaskName = (taskid) => {
    const updatedList = taskList.filter((task) => {
      return taskid !== task.id;
    });
    setTaskList(updatedList);
  };

  const markCompleted = (taskid) => {
    const updatedList = taskList.map((task) =>
      task.id === taskid ? { ...task, isCompleted: true } : task,
    );
    setTaskList(updatedList);
  };

  return (
    <div className="App">
      <div className="add-task-layout">
        <input onChange={fetchTaskName} value={taskName} />
        <button onClick={addTaskName}>Add</button>
      </div>

      <div className="display-task-layout">
        {taskList.map((list) => {
          return (
            <Tasklist
              task={list.name}
              taskid={list.id}
              taskcompleted = {list.isCompleted}
              deleteTask={deleteTaskName}
              markCompleted={markCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
