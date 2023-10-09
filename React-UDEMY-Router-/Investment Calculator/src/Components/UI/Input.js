

const Input = (props) => {

    return (
        <p>
            <label htmlFor={props.htmlLabel}>{props.labelValue}</label>
            <input onChange={props.changeHandler} type={props.inputType} id={props.inputId}></input>
        </p>
    )
}


export default Input; 