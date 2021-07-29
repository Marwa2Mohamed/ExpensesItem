import { useState } from "react";
import "../CSS/NewExpense.css";
import ExpensesForm from "./ExpenseForm";
import ExpensesDisplay from "./ExpensesDisplay";

function NewExpense(props) {
  const [display, setDisplay] = useState(false);
  const OnSaveExpenseForm = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    };
    props.onFinish(expenseData);
  }; // to send values from children to parent 1st step

  const DisplayForm = (isToDisplay) => {
    setDisplay(isToDisplay);
    // console.log("isToDisplay : " + isToDisplay);
  }
  return (
    <div className="new-expense">
      {display && <ExpensesForm displayAtrr = {display} onSaveForm={OnSaveExpenseForm} onClickingButton= {DisplayForm}></ExpensesForm>}
      {!display && <ExpensesDisplay displayAtrr = {display} onClickingButton= {DisplayForm}></ExpensesDisplay>}
      
      {/* to send values from children to parent 2nd step, the attribute(onSaveForm) is not a standard*/}
    </div>
  );
}

export default NewExpense;
