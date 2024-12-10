import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Home/Home";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <h3>not found</h3>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
