import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";
function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={totalMaximum}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
}
export default Chart;
