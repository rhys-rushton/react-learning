import Button from '../UI/Button';

const ButtonGroup = (props) => {
    
    return (
        <p className="actions">
            <Button handleClick= {props.resetClickHandle} buttonType={"reset"} buttonClass={"buttonAlt"} value={"Reset"}></Button>
            <Button handleClick={props.submitChangeHandler} buttonType={"submit"} buttonClass={"button"} value={"Calculate"}></Button>
        </p>

    )

}

export default ButtonGroup; 