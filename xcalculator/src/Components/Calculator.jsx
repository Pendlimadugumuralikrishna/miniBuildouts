import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  let [inputValue, setInputValue] = useState("");
  let [result, setResult] = useState("");

  const handleInput = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const clearInput = () => {
    setInputValue("");
    setResult("");
  };

  const printResult = () => {
    let ans = eval(inputValue.toString());
    if (ans === undefined) {
      setResult("Error");
    } else {
      setResult(ans);
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          value={inputValue}
          readOnly
        />
      </div>
      <div className="result-container">
        <p>{result}</p>
      </div>
      <div className="button-row">
        <button className="number-button" onClick={() => handleInput("7")}>
          7
        </button>
        <button className="number-button" onClick={() => handleInput("8")}>
          8
        </button>
        <button className="number-button" onClick={() => handleInput("9")}>
          9
        </button>
        <button className="operator-button" onClick={() => handleInput("+")}>
          +
        </button>
      </div>
      <div className="button-row">
        <button className="number-button" onClick={() => handleInput("4")}>
          4
        </button>
        <button className="number-button" onClick={() => handleInput("5")}>
          5
        </button>
        <button className="number-button" onClick={() => handleInput("6")}>
          6
        </button>
        <button className="operator-button" onClick={() => handleInput("-")}>
          -
        </button>
      </div>
      <div className="button-row">
        <button className="number-button" onClick={() => handleInput("1")}>
          1
        </button>
        <button className="number-button" onClick={() => handleInput("2")}>
          2
        </button>
        <button className="number-button" onClick={() => handleInput("3")}>
          3
        </button>
        <button className="operator-button" onClick={() => handleInput("*")}>
          *
        </button>
      </div>
      <div className="button-row">
        <button className="clear-button" onClick={clearInput}>
          C
        </button>
        <button className="number-button" onClick={() => handleInput("0")}>
          0
        </button>
        <button className="equal-button" onClick={printResult}>
          =
        </button>
        <button className="operator-button" onClick={() => handleInput("/")}>
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
