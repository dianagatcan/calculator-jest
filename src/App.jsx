import "./App.css";
import React, { useState } from "react";
import Button from "./Button/button";

export function sumNrs(a, b) {
  return a + b;
}

export function subNrs(a, b) {
  return a - b;
}

export function multiplyNrs(a, b) {
  return a * b;
}

export default function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num1: 0,
    num2: 0,
    result: 0,
  });
  const operations = ["*", "/", "+", "-"];
  const appliers = ["√", "^2", "%"];
  const keys = [
    "√",
    "^2",
    "%",
    "*",
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "C",
  ];

  function isNum1() {
    return calc.num2 === 0 && calc.sign === "";
  }
  function isNum2() {
    return calc.num1 !== 0 && calc.sign !== "";
  }

  function handleNum(btn) {
    // change num 1 or num 2
    if (isNum1()) {
      setCalc({
        ...calc,
        num1: Number(calc.num1.toString() + btn.toString()),
      });
    }
    if (isNum2()) {
      setCalc({
        ...calc,
        num2: Number(calc.num2.toString() + btn.toString()),
      });
    }
  }

  function handleClear() {
    setCalc({
      sign: "",
      num1: 0,
      num2: 0,
      result: 0,
    });
  }

  function handleOperation(btn) {
    if (calc.num1 !== 0 && calc.num2 === 0) {
      setCalc({
        ...calc,
        sign: btn,
      });
    }
  }

  function handleEqual() {
    switch (calc.sign) {
      case "+":
        setCalc({
          num1: 0,
          num2: 0,
          sign: "",
          result: sumNrs(calc.num1, calc.num2),
        });
        break;
      case "-":
        setCalc({
          num1: 0,
          num2: 0,
          sign: "",
          result: subNrs(calc.num1, calc.num2),
        });
        break;
      case "*":
        setCalc({
          num1: 0,
          num2: 0,
          sign: "",
          result: multiplyNrs(calc.num1, calc.num2),
        });
        break;
      default:
        break;
    }
  }

  function handlePoint() {
    if (isNum1()) {
      setCalc({
        ...calc,
        num1: !calc.num1.toString().includes(".") ? calc.num1 + "." : calc.num1,
      });
    }
    if (isNum2()) {
      setCalc({
        ...calc,
        num2: !calc.num2.toString().includes(".") ? calc.num2 + "." : calc.num2,
      });
    }
  }

  function decideFunc(btn) {
    if (btn === ".") {
      handlePoint();
    } else if (btn === "C") {
      handleClear();
    } else {
      operations.includes(btn) ? handleOperation(btn) : handleNum(btn);
    }
  }

  return (
    <div className="main">
      <div className="screen">
        <h1 className="display">
          {calc.result && !calc.num1
            ? calc.result
            : calc.num2
            ? calc.num2
            : calc.num1}
        </h1>
      </div>
      <div className="wrapper">
        {keys.map((btn, index) => (
          <Button
            key={index}
            id={index}
            text={btn}
            onClick={() => {
              decideFunc(btn);
            }}
          />
        ))}
        <Button
          key={99}
          id={99}
          text="="
          disabled={!calc.num2 ? true : false}
          onClick={() => {
            handleEqual();
          }}
        ></Button>
      </div>
    </div>
  );
}
