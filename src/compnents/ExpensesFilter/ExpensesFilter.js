import { useState } from "react";

import "../CSS/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // eslint-disable-next-line
  const [Year, setNewYear] = useState("2022");
  const yearFilter = (event) => {
    let newYear = event.target.value;
    setNewYear(newYear);
    props.onChoice(newYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={Year} onChange={yearFilter}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
