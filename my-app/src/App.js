import "./index.css";
import { useState } from "react";
import React from "react";

export default function App() {
  return <Calculator />;
}
// Renders the calculator
function Calculator() {
  const [billValue, SetBillValue] = useState("");
  // const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    SetBillValue(e.target.value);
  }

  return (
    <div className="form-container">
      <h1>How Much was the bill?</h1>
      <input text="text" value={billValue} onChange={handleSubmit} />
      <h1>{SetBillValue}</h1>
    </div>
  );
}
