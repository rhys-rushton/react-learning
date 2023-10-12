

const ResultRow = (props) => {
    console.log(props)
    return (<tr>
        {
            props.rowData.map(item => (
                <tr>
                <td>{item.year}</td>
                <td>{item.savingsEndOfYear}</td>
                <td>{item.yearlyInterest}</td>
                <td>{item.yearlyContribution}</td>
                </tr>
            ))
        }
        </tr>
   )



    // return (
    //     <tr>
    //         <td>YEAR NUMBER</td>
    //         <td>TOTAL SAVINGS END OF YEAR</td>
    //         <td>INTEREST GAINED IN YEAR</td>
    //         <td>TOTAL INTEREST GAINED</td>
    //         <td>TOTAL INVESTED CAPITAL</td>
    //       </tr>
    // )



}

export default ResultRow; 
