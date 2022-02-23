import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState(taskState);

  const clearTask = (id)=> {
    setTasks(tasks.filter( (task)=> task.id !== id));
  }

  const reminderToggle = (id)=> {
    setTasks(tasks.map( (task)=> (task.id === id)? {...task, rem: !task.rem} : task ))
  }

  return (
    <div className="container">
      <Header text="Task Tracker App" />
      { (tasks.length === 0 )? <p>Please Add a task to track</p> : 
      <Tasks state={tasks} clearFunc={clearTask} remTogg={reminderToggle} /> }
    </div>
  );

  
}
const taskState = [
  {id: 1, text: "Drs App", day: "05/02/2022 14:30", rem: true},
  {id: 2, text: "Meet Cute", day: "06/02/2022 10:30", rem: true}
];

export default App;
