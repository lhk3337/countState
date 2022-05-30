import React from "react";

const Counter = ({ data, increment, decrement }) => {
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
    </div>
  );
};

export default Counter;
