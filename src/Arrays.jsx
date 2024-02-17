import React, { useState } from "react";

const Arrays = () => {
  const [foods, setFoods] = useState(["Pizza", "Pasta", "MoMo"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...foods, newFood]);
  };
  const handleRemoveFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };
  return (
    <>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name..." />
      <button onClick={handleAddFood}>Add Food</button>
    </>
  );
};

export default Arrays;
