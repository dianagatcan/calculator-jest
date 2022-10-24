import "./App.css";
import React, { useState } from "react";
import Button from "./Button/button";

export default function App() {
  const [input, setInput] = useState("");

  const keys = [
    "√",
    "^",
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
    "=",
  ];

  function displayText(buttonValue) {
    setInput(buttonValue);
  }

  return (
    <div className="main">
      <div className="screen">
        <h1 className="display">{input}</h1>
      </div>
      <div className="wrapper">
        {keys.map((buttonValue, index) => (
          <Button
            key={index}
            id={index}
            text={buttonValue}
            handleClick={() => {
              displayText(buttonValue);
            }}
          />
        ))}
      </div>
    </div>
  );
}
