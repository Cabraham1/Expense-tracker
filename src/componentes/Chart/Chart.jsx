import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointsvalue = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMaxValue = Math.max(...dataPointsvalue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
