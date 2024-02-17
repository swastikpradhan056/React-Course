/* useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
                This component re-renders
                This component mounts 
                The state of a value

useEffect(function, [dependencies])

1. useEffect(() => {})    ---   Runs after every re-render
2. useEffect(() => {}, [dependency])   --   Only runs if dependency changes
3. useEffect(async () => {}, [dependency])     -   Waits for promise to resolve before running the function
4. useEffect(function, []).unmount       --   Cleans up when this component unmounts
5. useEffect(() => {}, [value])   --- Runs on mount + when value changes
6. useEffect(() => {}, [])    --- Runs only on mount

USES
1. Event Listeners
2. DOM Manipulation
3. Subscriptions (real-time updates)
4. Fetching Data from an API
5. Clean up when a computer unmounts
*/
import React, { useState, useEffect } from "react";

const Use_Effect = () => {
  const [count, setCount] = useState(0); // State variable and updater
  const [color, setColor] = useState("green");
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count]);

  function addcount() {
    setCount((c) => c + 1);
  }
  function subcount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addcount}>Add</button>
      <button onClick={subcount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default Use_Effect;
