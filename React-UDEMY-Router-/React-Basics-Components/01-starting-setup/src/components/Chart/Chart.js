import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {

    // Returns an array of numbers. 
    // we can then pass this into totalMaximum
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    const totalMaximum = Math.max(...dataPointValues); 


    return <div className = "chart">
        {
props.dataPoints.map((dataPoint) => {
    return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
})
        }
    </div>
}


export default Chart; 