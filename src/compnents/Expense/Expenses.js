import React, { useState } from "react"; /*-- already built in implicitly */
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesCondition from "./ExpensesCondition";
import Card from "../UI/Card";
import "../CSS/Expenses.css";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2022");

  const DisplayYear = (year) => {
    setfilteredYear(year);
  };

  let filteredArray = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter onChoice={DisplayYear}></ExpensesFilter>
      {/*Long statments or expressions like for and if not accepted */}
      <ExpensesCondition filtArr = {filteredArray}></ExpensesCondition>
      {/*to loop over Jsx element */}
        {/* <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
        ></ExpenseItem>
        */}
    </Card>
    </li>
  );
}

export default Expenses;
