import React, { createContext } from "react";
import AllBlogData from "../Hooks/AllBlogData";
import DisableDevtool from 'disable-devtool';

DisableDevtool();

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const value = AllBlogData();
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default ContextProvider;
