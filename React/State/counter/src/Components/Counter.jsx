import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="container">
        <h1>Counter App</h1>

        <h2>{count}</h2>
  <div className="btndiv">
        <button onClick={increase}>
          Increment
        </button>

        <button onClick={decrease}>
          Decrease
        </button>
        </div>
      </div>
    </>
  );
}

export default Counter;