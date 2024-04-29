import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  function handleValue(e) {
    setValue(+e.target.value);
  }

  const [Second, setSecond] = useState(0);
  function SecondHanle(e) {
    setSecond(+e.target.value);
  }
  const math = (value * Second) / 100;
  const [last, setlast] = useState(0);
  function thirdHanle(e) {
    setlast(e.target.value);
  }
  const math2 = (value * last) / 100;
  let Final = math + math2;

  return (
    <div>
      <First value={value} handleValue={handleValue} />
      <SecondF value={value} SecondHanle={SecondHanle} math={math} />
      <Third
        value={value}
        SecondHanle={SecondHanle}
        math={math}
        thirdHanle={thirdHanle}
        Final={Final}
      />
      <Fouth
        value={value}
        SecondHanle={SecondHanle}
        math={math}
        math2={math2}
        Final={Final}
      />
      <Five value={value} SecondHanle={SecondHanle} math={math} />
    </div>
  );
}

function First({ value, handleValue, SecondHanle, math }) {
  return (
    <div>
      <span> How much was the Bill ?</span>
      <input placeholder="cost of the food" onChange={handleValue} />
      <br />
    </div>
  );
}
function SecondF({ SecondHanle }) {
  return (
    <>
      <span> How did you like the service ? </span>
      <select onChange={SecondHanle}>
        <option value={0}>Dissatisfied (0%) </option>
        <option value={5}>It was okay (5%) </option>
        <option value={10}> It was good (10%) </option>
        <option value={20}> it was amazing (20%) </option>
      </select>
    </>
  );
}
function Third({ SecondHanle, thirdHanle }) {
  return (
    <>
      <br />
      <span> How did your friend like the service ? </span>
      <select onChange={thirdHanle}>
        <option value={0}> Dissatisfied (0%)</option>

        <option value={5}>It was okay (5%) </option>

        <option value={10}> It was good (10%) </option>

        <option value={20}> Absolutely amazing! (20%) </option>
      </select>
    </>
  );
}

function Fouth({ value, Final }) {
  return (
    <h1>
      {" "}
      You pay $ {value === "" ? 0 : value + Final} ($
      {value === "" ? 0 : value} + $ {Final}
      tip)
    </h1>
  );
}
function Five({ reset }) {
  return <button> Reset</button>;
}
export default App;
