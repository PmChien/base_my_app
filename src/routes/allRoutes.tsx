import React from "react";

import { lazy } from "react";

// const HomePage = lazy(() => import("../views/HomePage"));
// const Page404 = lazy(() => import("../views/Page404"));
const QuanLyHoSoCmnd9So = lazy(
  () => import("../components/pages/quanLyHoSoCmnd9So")
);

const allRoutes: any[] = [
  {
    path: `home`,
    element: <div>this is home page</div>,
  },
  {
    path: `quan-ly/hs-cmnd-9-so`,
    element: <QuanLyHoSoCmnd9So />,
  },
  {
    path: `l2`,
    element: <div>l2</div>,
  },
  {
    path: `l3`,
    element: <div>l3</div>,
  },
];

export default allRoutes;
