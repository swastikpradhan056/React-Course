// React Hooks = Special function that allows functional components to use React features without writing class components (useState, useEffect, useContext, useReducer, useCallback, and more...)

//useState() = A React hook that allows the creation of a stateful variable AND a setter function to update its value in the  Virtual DOM. [name, setName]

import React, { useState } from "react";

function Hooks() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployeed] = useState(false);

  const updateName = () => {
    setName("Swastik");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployeedStatus = () => {
    setIsEmployeed(!isEmplo0yed);
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Employeed: {isEmplo0yed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployeedStatus}>Toggle Status </button>
      </div>
    </>
  );
}
export default Hooks;
