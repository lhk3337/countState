import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/modules/counter";
const Counter = () => {
  // const data = useSelector(({ counter }) => ({
  //   number: counter.number,
  // }));
  const data = useSelector(({ counter }) => counter);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
