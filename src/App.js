import "./App.css";
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState("0");
  const [oldNum, setOldNum] = useState("0");
  const [operator, setOperator] = useState("0");

  const inputNum = (e) => {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  };

  const inputDot = (e) => {
    var input2 = e.target.value;
    if (num.includes(".")) {
      setNum(num);
    } else {
      setNum(num + input2);
    }
  };

  const clear = () => {
    setNum(0);
  };

  const percentage = () => {
    setNum(num / 100);
  };

  const backspace = () => {
    if (num.length > 1) {
      setNum(num.slice(0, num.length - 1));
    } else {
      setNum(0);
    }
  };

  const plusMinus = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(-1 * num);
    }
  };

  const operatorHandler = (e) => {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  };

  const calculate = () => {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">{num}</div>
        <button className="btn light-gray" onClick={clear}>
          AC
        </button>
        <button className="btn light-gray" onClick={backspace}>
          C
        </button>
        <button className="btn light-gray" onClick={plusMinus}>
          +/-
        </button>
        <button className="btn light-gray" onClick={percentage}>
          %
        </button>

        <button className="btn" onClick={inputNum} value={7}>
          7
        </button>
        <button className="btn" onClick={inputNum} value={8}>
          8
        </button>
        <button className="btn" onClick={inputNum} value={9}>
          9
        </button>
        <button className="btn orange" onClick={operatorHandler} value={"/"}>
          /
        </button>

        <button className="btn" onClick={inputNum} value={4}>
          4
        </button>
        <button className="btn" onClick={inputNum} value={5}>
          5
        </button>
        <button className="btn" onClick={inputNum} value={6}>
          6
        </button>
        <button className="btn orange" onClick={operatorHandler} value={"X"}>
          X
        </button>

        <button className="btn" onClick={inputNum} value={1}>
          1
        </button>
        <button className="btn" onClick={inputNum} value={2}>
          2
        </button>
        <button className="btn" onClick={inputNum} value={3}>
          3
        </button>
        <button className="btn orange" onClick={operatorHandler} value={"+"}>
          +
        </button>

        <button className="btn" onClick={inputNum} value={0}>
          0
        </button>
        <button className="btn" onClick={inputDot} value={"."}>
          .
        </button>

        <button className="btn equal orange" onClick={calculate}>
          =
        </button>
        <button className="btn orange" onClick={operatorHandler} value={"-"}>
          -
        </button>
      </div>
    </div>
  );
}
