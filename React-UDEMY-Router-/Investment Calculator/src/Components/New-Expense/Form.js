import ButtonGroup from './ButtonGroup'
import '../../index.css'
import Input from '../UI/Input'
import InputGroup from './InputGroup'
import { useState } from 'react';

const Form = (props) => {

  const [inputState, setInputState] = useState({
    currentSaving: '0',
    yearlySaving: '0',
    expectedInterest: '0',
    investmentDuration: '0',
  });

  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSaving']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlySaving']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedInterest'] / 100;
    const duration = +userInput['investmentDuration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setYearlyData(yearlyData);
  };


  const handleInputChange = (event) => {

    //console.log(event.target.value);
    //console.log(event.target);

    if (event.target.id === "current-savings") {

      setInputState((prevState) => {
        return { ...prevState, currentSaving: String(event.target.value) }
      })


    } else if (event.target.id === "yearly-contribution") {

      setInputState((prevState) => {
        return { ...prevState, yearlySaving: String(event.target.value) }
      })

    } else if (event.target.id === "expected-return") {

      setInputState((prevState) => {
        return { ...prevState, expectedInterest: String(event.target.value) }
      })

    } else if (event.target.id === "duration") {
      setInputState((prevState) => {
        return { ...prevState, investmentDuration: String(event.target.value) }
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateHandler(inputState)
  }

  const handleReset = (event) => {

    event.preventDefault();
         setInputState((prevState) => {
       return {...prevState, currentSaving: 0, yearlySaving: 0, expectedInterest: 0, investmentDuration: 0}
  })
  }


  return (
    <form className="form">
      <InputGroup inputVals={inputState} inputChangeHandler={handleInputChange} />
      <ButtonGroup submitChangeHandler={handleSubmit} resetClickHandle={handleReset} />
    </form>

  )
}

export default Form;

