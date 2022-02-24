import Header from './components/Header.js';
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';
import {useState, useEffect} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [formPresence, toggleForm] = useState(false);

  useEffect( ()=>{

    const getTasks = async ()=>{
      const dbTasks = await fetchTasks();
      setTasks(dbTasks);
    }

    getTasks();

  }, [])

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5050/tasks/",{method: 'POST', headers: {"Content-Type": "Application/json"}, body: JSON.stringify(task)});
    
    const body = await res.json();

    setTasks([...tasks, body]);

  }

  const clearTask = async (id)=> {
    await fetch(`http://localhost:5050/tasks/${id}`,{method: 'DELETE'});

    setTasks(tasks.filter( (task)=> task.id !== id));
  }

  const reminderToggle = async (id)=> {
    const remTask = tasks.map( (task)=> (task.id === id)? {...task, rem: !task.rem} : task )
    setTasks(remTask);
    const task = remTask.find( (task)=> task.id === id );
    await fetch(`http://localhost:5050/tasks/${id}`, {method: 'PUT', headers: {"Content-Type": "Application/json"}, body: JSON.stringify(task)});
  }

  // useEffect( ()=>
  //   localStorage.setItem(db_key, JSON.stringify(tasks)) 
  // , [tasks]);

  return (
    <div className="container">
      <Header text="Task Tracker App" formTogg={toggleForm} formState={formPresence} />
      {formPresence && <TaskForm addFunc={addTask} />}
      { (tasks.length === 0 )? <p>Please Add a task to track</p> : 
      <Tasks state={tasks} clearFunc={clearTask} remTogg={reminderToggle} /> }
    </div>
  );
  
}

async function fetchTasks() {
  const res = await fetch("http://localhost:5050/tasks");
  const body = await res.json();

  return body;
}

export default App;
