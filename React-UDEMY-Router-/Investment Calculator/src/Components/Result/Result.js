import ResultRow from './ResultRow';

const Result = (props) => {
  
    console.log(props.data.length)
  
    if (props.data.length === 0) {
       return (<p>There is No Data data</p>)
    } else {
        return (
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
         <ResultRow rowData = {props.data}/>
        </tbody>
      </table>
        )
    }


}


export default Result; 