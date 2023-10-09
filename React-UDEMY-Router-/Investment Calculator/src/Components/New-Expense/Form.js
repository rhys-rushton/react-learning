import ButtonGroup from './ButtonGroup'
import '../../index.css'
import Input from '../UI/Input'
import InputGroup from './InputGroup'
import {useState} from 'react';

const Form = (props) => {

  const [inputState, setInputState] = useState({
      currentSaving: '0',
      yearlySaving: '0',
      expectedInterest: '0',
      investmentDuration: '0',
  });


    const handleInputChange = (event) => {

      //console.log(event.target.value);
      //console.log(event.target);

      if (event.target.id === "current-savings") {
        
        setInputState((prevState) => {
          return {...prevState, currentSaving: String(event.target.value)}
        })
        

      } else if (event.target.id === "yearly-contribution") {

        setInputState((prevState) => {
          return {...prevState, yearlySaving: String(event.target.value)}
        })

      } else if (event.target.id === "expected-return") {

        setInputState((prevState) => {
          return {...prevState, expectedInterest: String(event.target.value)}
        })

      } else if (event.target.id === "duration") {
        setInputState((prevState) => {
          return {...prevState, investmentDuration: String(event.target.value)}
        })
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      props.handleSubmit(inputState)
    }

    const handleReset = (event) => {
      event.preventDefault();

      setInputState((prevState) => {
        return {...prevState, currentSaving: '0', yearlySaving: '0', expectedInterest: '0', investmentDuration: '0'}
      })

    
    }


    return (
        <form className="form">
          <InputGroup inputChangeHandler = {handleInputChange}/>
          <ButtonGroup submitChangeHandler = {handleSubmit} resetClickHandle = {handleReset}/>
      </form>
      
    )




}

export default Form; 

