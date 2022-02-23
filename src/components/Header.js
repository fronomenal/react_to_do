import Button from './Button.js'

const Header = (props)=> {
    return (
        <header className="header">
            <h1>{props.text}</h1>
            <Button click={btnClick} color="green" text="Add"/>
        </header>
    );
}

Header.defaultProps = {
    text: "Task Tracker"
}

function btnClick(e){
    alert("Clicked a " + e.target)
}

export default Header;