// updater function = A function passed as an argument to setState usually ex. setYear(arrow function)
// Allow for safe updates based on the previous state
// used with multiple state updates and asynchronous functions
// Good practice to use updater functions
import React, { useState } from "react";

function UpdaterFunction() {
  const [count, setCount] = useState(0);

  function increment() {
    // take the PENDING state to calculate NEXT state.
    // React puts your updater function in a queue (waiting in line)
    // During the next render, it will call them in the same order,

    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={decrement}>Decrement</button>&nbsp;
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>&nbsp;
      </div>
    </>
  );
}
export default UpdaterFunction;
