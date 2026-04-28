import './App.css';
import { useState } from 'react';

function App() {
 const [list,setlist] = useState("");
 const [task,setTask] = useState([]);

 const handleChange = (event) => {
   setlist(event.target.value);
 }
 const addtask = (event) => {
   setTask([...task,list])
   setlist('')
 }

 const deleteList = (taskName) => {
    const updatedList =  task.filter((item) => {
      return item !== taskName
    })
    setTask(updatedList)
 }

  return (
    <div className="App">
      <div className='add new task'>
        <input onChange={handleChange} value={list}/>
        <button onClick={addtask}>Add Task➕</button>
      </div>
      <div className='list'>
        {task.map((item) => {
          return(
            <div>
              <h1>{item}</h1> 
               <button onClick={() => deleteList(item)}>x</button>
            </div>
          )
        }
          )}
      </div>
    </div>
  );
}

export default App;
