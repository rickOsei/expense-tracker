import React from "react";
import SingleExpenses from "./SingleExpenses";
import { useSelector } from "react-redux";

function Expenses() {
  const expenses = useSelector((state) => state.expenses);

  return (
    <section className="expenses_sec">
      {expenses.map((expense, index) => {
        return <SingleExpenses key={index} expense={expense} />;
      })}
    </section>
  );
}

export default Expenses;
