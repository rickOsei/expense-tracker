import Input from "./components/Input";
import Expenses from "./components/Expenses";
import { useSelector } from "react-redux";

function App() {
  const { totalBalance, totalExpenses, totalIncome } = useSelector(
    (state) => state
  );

  return (
    <main className="container">
      <section className="input_sec">
        <Input />
      </section>

      <section className="output_sec">
        <div className="calculations">
          <div className="income figure">
            <p>income</p>
            <p>${totalIncome}</p>
          </div>
          <div className="expenses figure">
            <p>expenses</p>
            <p>${totalExpenses}</p>
          </div>
          <div className="balance figure">
            <p>balance</p>
            <p>${totalBalance}</p>
          </div>
        </div>
        <Expenses />
      </section>
    </main>
  );
}

export default App;
