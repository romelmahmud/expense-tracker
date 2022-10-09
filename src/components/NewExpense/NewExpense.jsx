import React from "react";
import ExpenseForm from "./ExpenseFrom";
import "./NewExpense.css";

const NewExpense = ({ onAddExpenseData }) => {
  const saveFormData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onFormSave={saveFormData} />
    </div>
  );
};

export default NewExpense;
