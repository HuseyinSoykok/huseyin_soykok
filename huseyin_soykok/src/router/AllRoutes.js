import React from "react";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "../Context/ContextProvider";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import DisableDevtool from 'disable-devtool';

DisableDevtool();

const AllRoutes = () => {
  return (
    <>
      <ContextProvider>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/" element={<HomeDark />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default AllRoutes;
