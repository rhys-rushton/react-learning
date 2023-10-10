

const Result = (props) => {
    console.log(props)
    let isData = false; 

    if (props.data.length !== 0) {
        return (<p>There is data</p>)
    } else {
        return (<p>No Data</p>)
    }


}


export default Result; 