import Button from './Button.js'
import {useLocation} from "react-router-dom";

const Header = (props)=> {
    const path = useLocation();

    return (
        <header className="header">
            <h1>{props.text}</h1>
        {(path.pathname === "/") && <Button click={ ()=> props.formTogg(!props.formState) } color="green" text={ (props.formState)? "Close" : "Add"} />}
        </header>
    );
}

Header.defaultProps = {
    text: "Task Tracker"
}


export default Header;