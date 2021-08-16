import "../CSS/Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  //need to create 12 dynamically chart bars
  return (
    <div>
      {props.ChartBarArray.map((bar) => (
        <ChartBar
          key={bar.label}
          value={bar.value}
          maxValue={null}
          label={bar.label}
        />
      ))}
    </div>
  );
}

export default Chart;
