import './ExpenseForm.css'
import {useState} from 'react'

const ExpenseForm = (props) => {
    // Multiple Ways to Track State
    /*
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
            setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
*/

    const [userInput, setUserInput] = useState ({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });
    


   // const titleChangeHandler = (event) => {
        /*
        setUserInput({
            // Unpack current userInput state object
            // then overwrite the title property.
            ...userInput,
            enteredTitle: event.target.value,
        })
        */
        // This way is better than the above way because 
        // react schedules state updates and in the previous 
        // way you could end up relying on out of date snapshots. 
        // the below way is guarantees you will get up to date snapshots. 

        

        //setUserInput((prevState) => {
           // return { ...prevState, enteredTitle: event.target.value}
        //})
    //};

    const amountChangeHandler = (event) => {
        setUserInput({
            // Unpack current userInput state object
            // then overwrite the title property.
            ...userInput,
            enteredAmount: event.target.value,
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            // Unpack current userInput state object
            // then overwrite the title property.
            ...userInput,
            enteredDate: event.target.value,
        })
    }

    // Generic change handler
    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setUserInput(prevState => {
                return {...prevState, enteredTitle: value}
            })
        } else if (identifier === 'date') {
            setUserInput(prevState => {
                return {...prevState, enteredDate: value}
            })
        } else {
            setUserInput( prevState => {
                return {...prevState, enteredAmount: value}
            })
        }
    }

    const submitHandler = (event) => {

        // Prevent default of page being sent so we can load data. 
        event.preventDefault();
        
        const expenseData = {
            title: userInput.enteredTitle, 
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)


        }

        props.onSaveExpenseData(expenseData);
        inputChangeHandler('title', '');
        inputChangeHandler('date', '');
        inputChangeHandler('', '')

    }

    return <form onSubmit  = {submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type = "text" value ={userInput.enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type = "number" value={userInput.enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type = "date" value = {userInput.enteredDate} onChange={dateChangeHandler} min="2019-01-01" max ="2022-12-31" />
            </div>
            
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        </form>
}


export default ExpenseForm; 