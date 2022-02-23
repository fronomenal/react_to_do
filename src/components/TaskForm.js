import {useState} from 'react';

const TaskForm = (props) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [rem, setReminder] = useState(false);

    const save = (e)=> {
        e.preventDefault();
    
        props.addFunc( {text, day, rem} );

        setText('');
        setDay('');
        setReminder(false);
    }

  return (
    <form className='add-form' onSubmit={save}>
        <div className="form-control">
            <label>Name: <input type="text" placeholder='Add Task' value={text} onChange={ (e)=> setText(e.target.value) } required/></label>
        </div>
        <div className="form-control">
            <label htmlFor="datetime">Date: <input type="date" value={day} onChange={ (e)=> setDay(e.target.value) } required/></label>
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="text">Set Reminder: <input type="checkbox" checked={rem} onChange={ (e)=> setReminder(e.currentTarget.checked) } /></label>
        </div>

        <input className="btn btn-block" type="submit" value="Save"></input>
    </form>
  )
}

export default TaskForm