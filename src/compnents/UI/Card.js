/*import React from 'react' -- already built in implicitly */
import "../CSS/Card.css";

function Card(props) {
  const classes = "expensesCard " + props.className; //props.className=> to add the class name given from the other component to current component
  return <div className={classes}>{props.children}</div>;
}
export default Card;
