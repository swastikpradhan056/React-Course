import React, { useContext } from "react";
import { UserContext } from "./Use_context";

const Use_context4 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div className="box">
        <h1>Component 4</h1>
        <h2>{`Bye ${user}!`}</h2>
      </div>
    </>
  );
};

export default Use_context4;
