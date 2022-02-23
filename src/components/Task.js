import { FaTimes} from "react-icons/fa";

const Task = (props) => {
  return (
    <div className={`task ${(props.tasks.rem)? "reminder" : ''}`} onDoubleClick={ ()=> props.remTogg(props.tasks.id) } >
        <h3>{props.tasks.text} <FaTimes onClick={ ()=> props.clearFunc(props.tasks.id) } style={{color: "red", cursor: "pointer"}} /></h3>
        <p>{props.tasks.day}</p>
    </div>
  )
}

export default Task