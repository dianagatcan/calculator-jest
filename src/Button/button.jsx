import React from "react";
import "./styles.css";

export default function Button(props) {
  const greyButtons = (val) => {
    return typeof val === "number" || val === "." || val === "C";
  };
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={
        !props.disabled
          ? greyButtons(props.text)
            ? "button"
            : "orange"
          : "button"
      }
    >
      {props.text}
    </button>
  );
}
