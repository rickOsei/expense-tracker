import { legacy_createStore as createStore } from "redux";

const initialState = {
  expenses: [],
  totalIncome: 0,
  totalExpenses: 0,
  totalBalance: 0,
  modal: false,
  modalContent: "",
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        modal: true,
        modalContent: "New Item Added",
      };
    case "DELETE_ITEM":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        expenses: state.expenses.map((expense) => {
          if (expense.id === action.payload.id) {
            return action.payload.newExpense;
          } else {
            return expense;
          }
        }),
      };
    case "TOTALS":
      const { totalBalance, totalExpenses, totalIncome } =
        state.expenses.reduce(
          (expense, item) => {
            let { amount, income } = item;
            if (income === "") income = parseFloat(0);

            expense.totalIncome = expense.totalIncome + parseFloat(income);
            expense.totalExpenses = expense.totalExpenses + parseFloat(amount);
            expense.totalBalance += parseFloat(income) - parseFloat(amount);

            return expense;
          },
          { totalBalance: 0, totalExpenses: 0, totalIncome: 0 }
        );
      return {
        ...state,
        totalIncome: totalIncome,
        totalBalance: totalBalance,
        totalExpenses: totalExpenses,
      };
    case "NO_VALUE":
      return { ...state, modal: true, modalContent: "Please Enter All Values" };
    case "CLOSE_MODAL":
      return { ...state, modal: false };

    default:
      return state;
  }
};

const store = createStore(expenseReducer);

export default store;
