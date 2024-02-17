/* useContext() = React Hook that allows you to share values between multiple levels of components without passing props down manually at every level. 

PROVIDER COMPONENT
1. import {createContext} from 'react';
2. export const MyContext =  createContext();
3. <MyContext.Provider value={value}>
    <Child/>
    </MyContext.Provider>

CONSUMER COMPONENTS
1. import React, {useContext} from 'react';
  import  {MyContext} from './Use_Context';
2. const value = useContext(MyContext);
*/

import React, { useState, createContext } from "react";
import Use_context2 from "./Use_context2";

export const UserContext = createContext();

const Use_context = () => {
  const [user, setUser] = useState("Swastik");
  return (
    <>
      <div className="box">
        <h1>Component 1</h1>
        <h2>{`Hello ${user}! Welcome to our website.`}</h2>
        <UserContext.Provider value={user}>
          <Use_context2 />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default Use_context;
