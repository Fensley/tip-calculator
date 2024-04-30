import { useState } from "react";
import "./App.css";

export default function App2() {
  return (
    <div>
      <TripCalculation />
    </div>
  );
}
function TripCalculation() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  function handlereset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service
      </SelectPercentage>

      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the servce
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handlereset={handlereset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill ?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children} </label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={"0"}>Dissatisfied (0%)</option>
        <option value={"5"}>It was okay (5%)</option>
        <option value={"10"}>It was good (10%)</option>
        <option value={"20"}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      {" "}
      You pay {bill + tip} (${bill} + ${tip})
    </h3>
  );
}
function Reset({ handlereset }) {
  return <button onClick={handlereset}> Reset</button>;
}