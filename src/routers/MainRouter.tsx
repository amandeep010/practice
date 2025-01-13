import { lazy } from "react";
import { PageName } from "../types/routerType";

const Portfolio = lazy(() => import("../pages/portfolio"));
const About = lazy(() => import("../pages/about"));
const Setting = lazy(() => import("../pages/setting"));
const Project = lazy(() => import("../pages/project"));

const mainRoute: Record<PageName, { path: string; element: JSX.Element }> = {
  portfolio: {
    path: "/",
    element: <Portfolio />,
  },
  about: {
    path: "/about",
    element: <About />,
  },
  setting: {
    path: "/setting",
    element: <Setting />,
  },
  project: {
    path: "/project",
    element: <Project />,
  },
};

export default mainRoute;
