import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Modal() {
  const { modalContent } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      dispatch({ type: "CLOSE_MODAL" });
    }, 3000);
    return () => {
      clearTimeout(modalTimeout);
    };
  }, []);
  return <div className="modal">{modalContent}</div>;
}

export default Modal;
