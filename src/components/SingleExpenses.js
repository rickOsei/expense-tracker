import React, { useState } from "react";
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import EditModal from "./EditModal";

function SingleExpenses({ expense }) {
  const { name, category, amount, date, income, id } = expense;
  const [editModal, setEditModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="expense_card">
      <p>
        <b>Name</b>: {name}
      </p>
      <p>
        <b>Category</b> : {category}
      </p>
      <p>
        <b>Amount</b>: ${amount}
      </p>
      <p>
        <b>Date</b>: {date}
      </p>

      <ImBin
        style={{ color: "red", marginRight: "25px" }}
        onClick={() => dispatch({ type: "DELETE_ITEM", payload: id })}
      />
      <FaRegEdit
        style={{ color: "red", marginRight: "25px" }}
        onClick={() => setEditModal(true)}
      />
      {editModal && <EditModal expense={expense} editModal={setEditModal} />}
    </div>
  );
}

export default SingleExpenses;
