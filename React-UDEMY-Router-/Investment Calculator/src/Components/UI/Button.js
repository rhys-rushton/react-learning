



const Button = (props) => {

    const className = props.buttonClass;

return (
    <button type={props.buttonType} className={className}>{props.value}</button>
)
}


export default Button; 