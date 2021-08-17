import React, { useState } from "react"; /*-- already built in implicitly */
import Expenses from "./compnents/Expense/Expenses";
import NewExpense from "./compnents/ExpenseForm/NewExpense";

let expensesArr = [
  {
    id: Math.random().toString(),
    title: "A table",
    amount: 123,
    date: new Date(2019, 5, 2),
  },
  {
    id:  Math.random().toString(),
    title: "New Tv",
    amount: 799.99,
    date: new Date(2021, 5, 2),
  },
  {
    id:  Math.random().toString(),
    title: "Car Insurance",
    amount: 300,
    date: new Date(2021, 8, 14),
  },
];


//Component
const App = () => {
  // eslint-disable-next-line
  const [expenses, setExpenses] = useState(expensesArr);
  const childOutput = (expense) => 
  {
      setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
        }); // it updates the expensesarray
        expensesArr =[expense, ...expensesArr]; 
  };


  return (
    <div>
      <NewExpense onFinish={childOutput}></NewExpense>
      <Expenses items={expensesArr} />
    </div>
  );
};

export default App;
