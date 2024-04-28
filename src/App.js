import "./App.css";

function App() {
  return (
    <div>
      <Bill />
    </div>
  );
}

function Bill() {
  return (
    <div>
      <span> How much was the Bill ? </span>
      <input />
      <br />

      <span> How did you like the service ? </span>
      <select>
        <option value="dd">Dissatisfied (0%)</option>
        <option value="dd">It was okay (5%) </option>
        <option value="dd"> It was good (10%) </option>
        <option value="dd"> it was amazing (20%) </option>
      </select>

      <br />
      <span> How did your friend like the service ? </span>
      <select>
        <option value="dd"> Dissatisfied (0%)</option>
        <option value="dd">It was okay (5%) </option>
        <option value="dd"> It was good (10%) </option>
        <option value="dd"> Absolutely amazing! (20%) </option>
      </select>

      <h1> You pay $100 ($100 + $0 tip)</h1>

      <button> Reset</button>
    </div>
  );
}

export default App;
