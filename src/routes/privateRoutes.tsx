import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout";

const PrivateRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<DefaultLayout />}>
        {routes.map((route: any, idx: any) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Route> */}
    </Routes>
  );
};

export default PrivateRoutes;
