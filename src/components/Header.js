import Button from './Button.js'

const Header = (props)=> {
    return (
        <header className="header">
            <h1>{props.text}</h1>
            <Button click={ ()=> props.formTogg(!props.formState) } color="green" text={ (props.formState)? "Close" : "Add"} />
        </header>
    );
}

Header.defaultProps = {
    text: "Task Tracker"
}


export default Header;