import "../CSS/Chart.css"
import ChartBar from "./ChartBar";

function Chart(props) {
  var maxValue;
  if(props.ChartBarArray[0].value > -1) {
    const getValuesArray = props.ChartBarArray.map(chart => chart.value);
     maxValue =  Math.max(...getValuesArray); //pulls out the array elements as individuals, and compare between an old max value with a new value.
  } else {
    maxValue = 0
  }
  //need to create 12 dynamically chart bars
  return (
    <div className="chart">
      {props.ChartBarArray.map(bar => (
        <ChartBar
          key={bar.label}
          value={bar.value}
          maxValue={maxValue}
          label={bar.label}
        />
      ))}
    </div>
  );
}

export default Chart;
