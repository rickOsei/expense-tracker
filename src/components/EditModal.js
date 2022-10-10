import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { v4 as uuid } from "uuid";

function EditModal({ expense, editModal }) {
  const [name, setName] = useState(expense.name);
  const [date, setDate] = useState(expense.date);
  const [amount, setAmount] = useState(expense.amount);
  const [income, setIncome] = useState(expense.income);
  const [category, setCategory] = useState(expense.category);

  const { modal } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClick = () => {
    const items = { name, date, amount, income, category, id: uuid() };

    dispatch({
      type: "EDIT_ITEM",
      payload: { id: expense.id, newExpense: items },
    });
    dispatch({ type: "TOTALS" });

    editModal(false);

    console.log(items);
  };

  return (
    <section className="edit_modal">
      {/* {modal && <Modal />} */}

      <input
        type="text"
        name="name"
        placeholder="enter item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        name="income"
        placeholder="enter income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <input
        type="number"
        name="amount"
        placeholder="enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        id="select-catergory"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="select value">please select category</option>
        <option value="food">food</option>
        <option value="drink">drink</option>
        <option value="accomodation">accomodation</option>
        <option value="transportation">transportation</option>
        <option value="housing">housing</option>
        <option value="renting">renting</option>
        <option value="miscellaneous">miscellaneous</option>
      </select>
      <button className="save_modal_btn" onClick={handleClick}>
        save
      </button>
    </section>
  );
}

export default EditModal;
