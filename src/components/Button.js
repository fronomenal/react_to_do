import PropTypes from 'prop-types'

const Button = (props)=> {
    return(
        <button onClick={props.click} style={{backgroundColor: props.color}} className="btn">{props.text}</button>
    )
}

Button.defaultProps = {
    color: "steelblue",
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
}

export default Button;