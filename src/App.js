/*import React from 'react' -- already built in implicitly */
import Expenses from "./compnents/Expense/Expenses";
import NewExpense from "./compnents/ExpenseForm/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(),
  },
];

const childOutput = (newexpense) => {
  expenses.push(newexpense);
  console.log(expenses[expenses.length -1])
}

//Component
 const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onFinish = {childOutput}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
