import React, { useState } from "react";
import ExpenseForm from "./ExpenseFrom";
import "./NewExpense.css";

const NewExpense = ({ onAddExpenseData }) => {
  const [showButton, setShowButton] = useState(false);

  const showExpenseFromHandler = () => {
    setShowButton(!showButton);
  };

  const saveFormData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      {!showButton && (
        <div>
          <button type="submit" onClick={showExpenseFromHandler}>
            Add New Expense
          </button>
        </div>
      )}
      {showButton && (
        <ExpenseForm
          onFormSave={saveFormData}
          showExpenseFromHandler={showExpenseFromHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
