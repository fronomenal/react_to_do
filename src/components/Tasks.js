import Task from './Task.js';

const Tasks = (props)=> {
  return (
    <div >
        {props.state.map( (task)=>
        <Task key={task.id} tasks={task} clearFunc={props.clearFunc} remTogg={props.remTogg} />
     )}
    </div>
  );
}

export default Tasks;
