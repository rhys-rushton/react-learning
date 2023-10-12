import logo from './assets/investment-calculator-logo.png';
import Form from './Components/New-Expense/Form'
import React, { useState } from 'react'
import Result from './Components/Result/Result'

function App() {

  const [yearlyData, setYearlyData] = useState([]);


  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

    <Form setYearlyData = {setYearlyData}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    <Result data = {yearlyData}   />
      
    </div>
  );
}

export default App;
