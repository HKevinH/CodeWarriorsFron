import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import About from "../views/about/About";
import Help from "../views/help/Help";
import CompleteRegister from "../views/register/CompleteRegister";
import Dashboard from "../views/dashboard/Dashboard";
import Tutorials from "../views/tutorials/Tutorials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loading: <div>Loading...</div>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/complete-registration",
    element: <CompleteRegister />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/tutorials",
    element: <Tutorials />,
  },
]);

export default router;
