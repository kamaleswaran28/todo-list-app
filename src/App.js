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

  return (
    <div className="App">
      <div className='add new task'>
        <input onChange={handleChange} value={list}/>
        <button onClick={addtask}>Add Task➕</button>
      </div>
      <div className='list'>
        {task.map((item) => <h1>{item}</h1>)}
      </div>
    </div>
  );
}

export default App;
