import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { v4 as uuid } from "uuid";

function Input() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [income, setIncome] = useState("");
  const [category, setCategory] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  const { modal } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClick = () => {
    const items = { name, date, amount, income, category, id: uuid() };

    if (name === "" || date === "" || amount === "") {
      dispatch({ type: "NO_VALUE" });
      return;
    } else {
      dispatch({ type: "ADD_EXPENSE", payload: items });
      dispatch({ type: "TOTALS" });
      setIsDisable(true);

      setName("");
      setAmount("");
      setDate("");
      setIncome("");
    }
    console.log(items);
  };

  return (
    <>
      {modal && <Modal />}
      <h2 className="input_title">add new expense</h2>
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
        disabled={isDisable}
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
      <button className="save_btn" onClick={handleClick}>
        save
      </button>
    </>
  );
}

export default Input;
