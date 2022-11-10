import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = ({ addExpense }) => {

  const [isEditing, setIsEditing] = useState(false)

  const startEditing = () => {
    setIsEditing(true)
  }
  const stopEditing = () => {
    setIsEditing(false)
  }
  

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm addExpense={addExpense} stopEditing={stopEditing} />
      )}
    </div>
  );
};

export default NewExpense;
