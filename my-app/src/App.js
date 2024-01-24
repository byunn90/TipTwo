import "./index.css";
import { useState } from "react";
import React from "react";

export default function App() {
  return <TipCalculator />;
}
// Renders the calculator
function TipCalculator() {
  const [billValue, SetBillValue] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  // const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    SetBillValue(e.target.value);
  }

  function Enjoyed(option) {
    return (
      <label>
        <select>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </label>
    );
  }

  return (
    <>
      <div className="form-container">
        <h1>How Much was the bill?</h1>
        <input text="text" value={billValue} onChange={handleSubmit} />
        <h1>{SetBillValue}</h1>
      </div>
      <div className="">
        <h1>How did you like the service?</h1>
        <input />
      </div>
    </>
  );
}
