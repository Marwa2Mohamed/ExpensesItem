import React, { useState } from "react"; /*-- already built in implicitly */
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
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
    <Card className="expenses">
      <ExpensesFilter onChoice={DisplayYear}></ExpensesFilter>
      {filteredArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/*to loop over Jsx element */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
     */}
    </Card>
  );
}

export default Expenses;
