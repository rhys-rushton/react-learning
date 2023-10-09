import Input from '../UI/Input'


const InputGroup = (props) => {
    return (
        <div>
            <div className="input-group">
                <Input changeHandler={props.inputChangeHandler} htmlLabel={"curent-savings"} labelValue={"Current Savings ($)"} inputType={"number"} inputId={"current-savings"}></Input>
                <Input changeHandler={props.inputChangeHandler} htmlLabel={"yearly-contribution"} labelValue={"Yearly Savings ($)"} inputType={"number"} inputId={"yearly-contribution"} />
            </div>
            <div className="input-group">
                <Input changeHandler={props.inputChangeHandler} htmlLabel={"expected-return"} labelValue={"Expected Interest (%, per year)"} inputType={"number"} inputId={"expected-return"}></Input>
                <Input changeHandler={props.inputChangeHandler} htmlLabel={"duration"} labelValue={"Investment Duration (years)"} inputType={"number"} inputId={"duration"}></Input>
            </div>
        </div>)
}

export default InputGroup; 