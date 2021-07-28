import React from 'react' /*-- already built in implicitly */
import "../CSS/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //{code} => refer to plain Js

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <div>{print()}</div> */}
      </div>
    </Card>
  );
}


export default ExpenseItem;
