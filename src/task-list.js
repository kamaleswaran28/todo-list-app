export const Tasklist = (props) => {
  return(
  <div>
    <h1 style={{backgroundColor : props.taskcompleted ? 'green' : 'red' }}>{props.task}</h1>
    <button onClick={() => props.deleteTask(props.taskid)}>❌</button>
    <button onClick={() => props.markCompleted(props.taskid)}>done</button>
  </div>
  );

};
 