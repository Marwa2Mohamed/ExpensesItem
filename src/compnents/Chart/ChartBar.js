import "../CSS/ChartBar.css";

function ChartBar(props) {

    var barFillHeight = 0;
    if(props.value > -1) {
        barFillHeight =  Math.round((props.value / props.maxValue)*100);
    } else {
        barFillHeight = 0;
    }
    
    
  return (
      <div className = "chart-bar">
          <div className = "chart-bar__inner">
             <div className = "chart-bar__fill" style ={{'height': barFillHeight + '%'}}></div>
          </div>
          <div className = "chart-bar__label">{props.label}</div>
      </div>
     
  );
}
export default ChartBar;
