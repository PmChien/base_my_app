import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Login from "../components/pages/Login";
import DefaultLayout from "../Layout/DefaultLayout";
import allRoutes from "./allRoutes";
import React from "react";
import DefaultLayout2 from "../Layout/Layout2";

const HomePage = lazy(() => import("../views/HomePage"));
const Page404 = lazy(() => import("../views/Page404"));

const routes: any[] = [
  {
    index: true,
    path: `/login`,
    element: <Login />,
  },
  {
    path: `/`,
    element: <DefaultLayout />,
    children: allRoutes,
  },
  {
    path: `*`,
    element: <Page404 />,
  },
];
const RouterApp = () => {
  const element = useRoutes(routes);
  return element;
};

export default RouterApp;
