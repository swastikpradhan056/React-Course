/*
  useState() = Re-renders the component when the state value changes.

  useRef() = "use Reference" Does not cause re-renders when its value changes. When you want a component to "remember" some information, but you don't want that information to trigger new renders.

    1. Accessing/Interacting with DOM elements.
    2. Handling Focus, Animations, and Transitions
    3. Managing Timers and Intervals
*/

import React, { useState, useEffect, useRef } from "react";

const Use_refs = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {});

  function handleClick1() {
    inputRef1.current.focus(); //Accessing a DOM element using ref
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    inputRef2.current.focus(); //Accessing a DOM element using ref
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus(); //Accessing a DOM element using ref
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";
  }
  return (
    <>
      <div>
        <button onClick={handleClick1}>Click me 1!</button>

        <input type="text" ref={inputRef1} />
        <button onClick={handleClick2}>Click me 2!</button>

        <input type="text" ref={inputRef2} />
        <button onClick={handleClick3}>Click me 3!</button>

        <input type="text" ref={inputRef3} />
      </div>
    </>
  );
};

export default Use_refs;
