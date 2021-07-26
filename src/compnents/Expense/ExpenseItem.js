import React, {useState} from 'react' /*-- already built in implicitly */
import "../CSS/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //{code} => refer to plain Js
  const [titlepointer, setTitle] = useState(props.title);

  const clickHandler = () => {
    
    setTitle("Updated!");
    
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titlepointer}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <div>{print()}</div> */}
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}


export default ExpenseItem;
