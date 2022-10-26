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

export function divideNrs(a, b) {
  return a / b;
}

export function powerNrs(a, b) {
  return a ** b;
}

export function sqrtNr(a) {
  return Math.sqrt(a);
}

export default function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num1: undefined,
    num2: undefined,
    result: undefined,
  });
  let [error, setErrors] = useState(false);
  const operations = ["*", "/", "+", "-", "^", "√"];
  const keys = [
    "√",
    "^",
    "*",
    "/",
    7,
    8,
    9,
    "+",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "C",
    ".",
    0,
  ];

  function isNum1() {
    return calc.num2 === undefined && calc.sign === "";
  }
  function isNum2() {
    return calc.num1 !== undefined && calc.sign !== "";
  }

  function handleNum(btn) {
    // change num 1 or num 2
    if (isNum1()) {
      setCalc({
        ...calc,
        num1:
          calc.num1 === undefined
            ? btn
            : Number(calc.num1.toString() + btn.toString()),
      });
    }
    if (isNum2()) {
      setCalc({
        ...calc,
        num2:
          calc.num2 === undefined
            ? btn
            : Number(calc.num2.toString() + btn.toString()),
      });
    }
  }

  function handleClear() {
    setCalc({
      sign: "",
      num1: undefined,
      num2: undefined,
      result: undefined,
    });
  }

  function handleOperation(btn) {
    if (btn === "√") {
      handleSqrt();
    } else if (calc.num1 !== undefined && calc.num2 === undefined) {
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
          num1: undefined,
          num2: undefined,
          sign: "",
          result: sumNrs(calc.num1, calc.num2),
        });
        break;
      case "-":
        setCalc({
          num1: undefined,
          num2: undefined,
          sign: "",
          result: subNrs(calc.num1, calc.num2),
        });
        break;
      case "*":
        setCalc({
          num1: undefined,
          num2: undefined,
          sign: "",
          result: multiplyNrs(calc.num1, calc.num2),
        });
        break;
      case "/":
        if (calc.num2 === 0) {
          setErrors(true);
        }
        setCalc({
          num1: undefined,
          num2: undefined,
          sign: "",
          result: divideNrs(calc.num1, calc.num2),
        });
        break;
      case "^":
        setCalc({
          num1: undefined,
          num2: undefined,
          sign: "",
          result: powerNrs(calc.num1, calc.num2),
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

  function handleSqrt() {
    setCalc({
      num1: undefined,
      num2: undefined,
      sign: "",
      result: sqrtNr(calc.num1),
    });
  }

  function decideFunc(btn) {
    setErrors(false);
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
          {calc.result !== undefined &&
          calc.result !== Infinity &&
          calc.num1 === undefined
            ? calc.result
            : calc.num2 !== undefined
            ? calc.num2
            : calc.num1}
        </h1>
        {error && <p>Can not divide by 0</p>}
      </div>
      <div className="wrapper">
        {keys.map((btn, index) => (
          <Button
            key={index}
            id={index}
            text={btn}
            disabled={
              (calc.num2 && operations.includes(btn)) ||
              (!calc.num2 && calc.result && operations.includes(btn))
                ? true
                : false
            }
            onClick={() => {
              decideFunc(btn);
            }}
          />
        ))}
        <Button
          key={99}
          id={99}
          text="="
          disabled={!calc.sign ? true : false}
          onClick={() => {
            handleEqual();
          }}
        ></Button>
      </div>
    </div>
  );
}
