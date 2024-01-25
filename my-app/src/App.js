import "./index.css";
import { useState } from "react";
import React from "react";

export default function App() {
  return <TipCalculator />;
}

// Renders the calculator
function TipCalculator() {
  const [billValue, setBillValue] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  function resetBill() {
    setBillValue("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput billValue={billValue} setBillValue={setBillValue} />
      <PercentageTip
        selectedPercentage={percentage1}
        setPercentage1={setPercentage1}
        label="How did you like the Service?"
      />
      <PercentageTip
        selectedPercentage={percentage2}
        setPercentage2={setPercentage2}
        label="How did your friend like the service?"
      />
      <CalculatedPercentageTip
        billValue={billValue}
        selectedPercentage={percentage1}
        selectedPercentage2={percentage2}
        resetBill={resetBill}
      />
    </div>
  );
}

function BillInput({ billValue, setBillValue }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
    </div>
  );
}

function PercentageTip({ selectedPercentage, setPercentage1, label }) {
  return (
    <div>
      <label>{label}</label>
      <select
        value={selectedPercentage}
        onChange={(e) => setPercentage1(Number(e.target.value))}
      >
        <option value="0">dissatisfied (0%)</option>
        <option value="5">It was Ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function CalculatedPercentageTip({
  billValue,
  selectedPercentage,
  resetBill,
  selectedPercentage2,
}) {
  const calculatedTip =
    (billValue * (selectedPercentage + selectedPercentage2)) / 100;

  return (
    <div>
      <h1>Your tip will be including Bill: ${calculatedTip + billValue}</h1>
      <button onClick={resetBill}>Reset</button>
    </div>
  );
}
