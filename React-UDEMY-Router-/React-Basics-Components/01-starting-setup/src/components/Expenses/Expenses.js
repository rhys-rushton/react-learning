import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import {useState} from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
  

    /** 
     //Derived/computed state
    let filterInfoText = '2019, 2020 & 2022';

    if (filteredYear === '2019') {
        filterInfoText = '2020, 2021 & 2022';

    } else if (filteredYear === '2020') {
        filterInfoText = '2019, 2021 & 2022';

    } else if (filteredYear === '2021') {
        filterInfoText = '2019, 2020 & 2022';

    } else {
        filterInfoText = '2019, 2020 & 2021';
    }

    <p>Data for years {filterInfoText} is hidden</p>
    */

    const filteredExpenses = props.data.filter(expenseFilter => String(expenseFilter.date.getFullYear()) === filteredYear);

    const dateHandler = (date) => {
        setFilteredYear(date);
    }

    return (
        <li>
    <Card className="expenses">

    <ExpensesFilter onDateSelection = {dateHandler} defaultDateValue = {filteredYear}/>

        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>

        {/*
        <ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date}></ExpenseItem>
        <ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date}></ExpenseItem>
        <ExpenseItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date}></ExpenseItem>
        <ExpenseItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date}></ExpenseItem>
    
    */}
    </Card>
    </li>
   
        )
}

export default Expenses;