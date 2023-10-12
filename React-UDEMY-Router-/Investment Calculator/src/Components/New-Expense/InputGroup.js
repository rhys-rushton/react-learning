import Input from '../UI/Input'


const InputGroup = (props) => {
    
   
    
    return (
        
        <div>
            <div className="input-group">
                <Input stateValue = {props.inputVals['currentSaving']} changeHandler={props.inputChangeHandler} htmlLabel={"curent-savings"} labelValue={"Current Savings ($)"} inputType={"number"} inputId={"current-savings"}></Input>
                <Input stateValue = {props.inputVals['yearlySaving']} changeHandler={props.inputChangeHandler} htmlLabel={"yearly-contribution"} labelValue={"Yearly Savings ($)"} inputType={"number"} inputId={"yearly-contribution"} />
            </div>
            <div className="input-group">
                <Input stateValue = {props.inputVals['expectedInterest']} changeHandler={props.inputChangeHandler} htmlLabel={"expected-return"} labelValue={"Expected Interest (%, per year)"} inputType={"number"} inputId={"expected-return"}></Input>
                <Input stateValue = {props.inputVals['investmentDuration']} changeHandler={props.inputChangeHandler} htmlLabel={"duration"} labelValue={"Investment Duration (years)"} inputType={"number"} inputId={"duration"}></Input>
            </div>
        </div>)
}

export default InputGroup; 