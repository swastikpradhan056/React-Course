import React, { useState } from "react";

const Objects = () => {
  const [car, setCar] = useState({
    Year: 2024,
    make: "ford",
    model: "Mustang",
  });
  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, Year: event.target.value }));
  };
  const handleMakeChange = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };
  const handleModelChange = (e) => {
    setCar(() => ({ ...car, model: e.target.value }));
  };

  return (
    <>
      <p>
        Your favourite car is: {car.Year} {car.make} {car.model}
        <input type="number" value={car.Year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <input type="text" value={car.model} onChange={handleModelChange} />
      </p>
    </>
  );
};

export default Objects;
