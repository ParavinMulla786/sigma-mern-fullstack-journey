import React from "react";

function handleclick() {
  console.log("Hello!!");
}

function handlemouseover() {
  console.log("BYYY!!");
}

function handledoubleclick() {
  console.log("Double Clicked!!");
}

export function Button() {
  return (
    <>
      <button onClick={handleclick}>Click me</button>

      <p onMouseOver={handlemouseover}>
        Please click the above Button
      </p>

      <button onDoubleClick={handledoubleclick}>
        Double Click me
      </button>
    </>
  );
}

export default Button;