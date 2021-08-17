import Chart from "./Chart";


function ExpenseChart(props) {
    var ChartBarArray = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0},
    ];
    
    let expense_len =props.expenses.length;
    if(expense_len !== 0){
        for(let expense of props.expenses)
        {
            const expenseMonth = expense.date.getMonth(); // returns 0=>Januray, or 1 => February, etc...
            ChartBarArray[expenseMonth].value = expense.amount;
            
        }
   } else{
       ChartBarArray.forEach(month => month.value =-1);
   }
    return <Chart ChartBarArray = {ChartBarArray}></Chart>
}

export default ExpenseChart;
