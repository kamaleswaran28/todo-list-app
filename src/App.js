import './App.css';
import { useState } from 'react';

function App() {

  const [taskName,setTaskName] = useState('')
  const [taskList,setTaskList] = useState([])

  const fetchTaskName = (event) => {
    setTaskName(event.target.value);
  }

  const addTaskName = () =>{
    setTaskList([...taskList , taskName]);
    setTaskName('');
  }

  const deleteTaskName = (taskName) => {
    const updatedList = taskList.filter((name)=>{
      return taskName !== name;
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
                <h1>{list}</h1>
                <button onClick={() => deleteTaskName(list)}>❌</button>
              </div>
            );
          } )
        }
      </div>

    </div>
  )
}

export default App;
