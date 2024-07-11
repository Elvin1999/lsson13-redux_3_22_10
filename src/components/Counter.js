import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("Works");
  const value = useRef(0);
  return (
    <>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <input type="number" onChange={(e) => {value.current = Number(e.target.value)}}></input>
      <button onClick={() => dispatch(incrementByAmount(value.current))}>
        Increment By Special Value
      </button>
    </>
  );
}
