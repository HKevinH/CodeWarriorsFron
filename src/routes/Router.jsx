
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Home from "../views/home/Home";


const router = createBrowserRouter([       {
    path: "/",
    element: <Home />,
    loading: <div>Loading...</div>,
    children: [
      {
        path: "home",
        element: <Home />
      }
    ]
  }]
)

export default router;