import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, increment2 } from './counterSlice';

const Counter = () => {
  // The function below is called a selector and allows us to select a value from
  // the state.
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // const DarkModeToggle = () => {
  //   const darkMode = useDarkMode(false);
  return (
    <div>
      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <br></br>
      <button
        aria-label="Increment Value by 2"
        onClick={() => {
          dispatch(increment2());
        }}
      >
        Add 2
      </button>
      <br></br>
      <button
        aria-label="Reset Value"
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
