import React from "react";

import { lazy } from "react";

// const HomePage = lazy(() => import("../views/HomePage"));
// const Page404 = lazy(() => import("../views/Page404"));
const QuanLyHoSoCmnd9So = lazy(
  () => import("../components/pages/quanLyHoSoCmnd9So")
);
const QuanLyHoSoCmnd9So2 = lazy(() => import("../components/pages/mantest"));

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
    path: `/man-1`,
    // element: man,
    element: <QuanLyHoSoCmnd9So2 />,
  },
  {
    path: `l3`,
    element: <div>l3</div>,
  },
];

export default allRoutes;
