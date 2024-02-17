import React, { useContext } from "react";
import { UserContext } from "./Use_context";
import Use_context4 from "./Use_context4";

const Use_context3 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div className="box">
        <h1>Component 3</h1>
        <h2>{`Hello Again ${user}`}</h2>
        <Use_context4 />
      </div>
    </>
  );
};

export default Use_context3;
