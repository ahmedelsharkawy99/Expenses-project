import { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isVisible, setIsVisible] = useState(false);
  const showFormHandler = () => setIsVisible(true);
  const hideFormHandler = () => setIsVisible(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 1000).toString(),
    };
    props.onAddNewExpense(expenseData);
    hideFormHandler();
  };
  return (
    <div className="new-expense">
      {!isVisible && <button onClick={showFormHandler}>Add New Expense</button>}
      {isVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCansel={hideFormHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
