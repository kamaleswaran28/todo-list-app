import './App.css';
import { useState } from 'react';

function App() {

  const [taskName,setTaskName] = useState('')
  const [taskList,setTaskList] = useState([])

  const fetchTaskName = (event) => {
    setTaskName(event.target.value);
  }

  const addTaskName = () =>{
    const updatedTaskList = {
      id : taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      name: taskName
    }
    setTaskList([...taskList , updatedTaskList]);
    setTaskName('');
  }

  const deleteTaskName = (taskid) => {
    const updatedList = taskList.filter((task)=>{
      return taskid !== task.id;
    });
    setTaskList(updatedList);
  }


  return (
    <div className='App'>

      <div className='add-task-layout'>
        <input onChange={fetchTaskName} value={taskName}/>
        <button onClick={addTaskName}>Add</button>
      </div>
      
      <div className='display-task-layout'>
        {
          taskList.map( (list) => {
            return (
              <div> 
                <h1>{list.name}</h1>
                <button onClick={() => deleteTaskName(list.id)}>❌</button>
              </div>
            );
          } )
        }
      </div>

    </div>
  )
}

export default App;
