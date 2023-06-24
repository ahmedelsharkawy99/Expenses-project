import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../General UI/Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import { useState } from "react";
import "./Expenses.css";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2020");
  const changeFilterHandler = (year) => {
    setYearFilter(year);
  };

  const filterExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearFilter}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
}

export default Expenses;
