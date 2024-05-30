import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import About from "../views/about/About";
import Help from "../views/help/Help";
import { COMPLETE_REGISTER } from "./routes";
import CompleteRegister from "../views/register/CompleteRegister";

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
]);

export default router;
